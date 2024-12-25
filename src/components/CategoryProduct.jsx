import Item from "antd/es/list/Item";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToWishlist, setCategoryId, setProductId } from "./store/categoryProduct";
import { setProductImage } from "./store/categoryProduct";
import { notification } from "antd";

export default function CategoryProduct() {
  const [displayPrice, setDisplayPrice] = useState(true);
  const [displaySize, setDisplaySize] = useState(true);
  const [categoryClick, setCategoryClick] = useState([]);
  const [categoryLength, setCategoryLength] = useState(0);
  const selectedCategoryId = useSelector((state) => state.category.selectedCategoryId);
  const wishList = useSelector((state) => state.category.wishlist);

  async function getcategoryClick() {
    let data = await fetch(`https://test.mybrands.az/api/v1/products/?categories=${selectedCategoryId}`).then(res => res.json());
    setCategoryLength(data.results.length);
    setCategoryClick(data.results || []);
    console.log("product", data)
  }

  //! Filter
  const [filterCategory, setFilterCategory] = useState([]);

  async function getFilterCategory() {
    let data = await fetch('https://test.mybrands.az/api/v1/products/filter-items').then(res => res.json());
    setFilterCategory(data);
    console.log("FilterCategory", data);
  }

  //! Filter Price
  const [price, setPrice] = useState([]);

  async function getPrice(minPrice = 0, maxPrice = 100) {
    try {
      const response = await fetch(
        `https://test.mybrands.az/api/v1/products/?categories=${selectedCategoryId}&max_price=${maxPrice}&min_price=${minPrice}`
      );
      const data = await response.json();
      setCategoryClick(data.results || []);
      setCategoryLength(data.results.length);
    } catch (error) {
      console.error("Fiyat verileri alınırken hata oluştu:", error);
    }
  }

  const handlePriceChange = (min, max) => {
    getPrice(min, max);
  };

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleCustomPriceChange = (min, max) => {
    const parsedMin = min ? parseInt(min) : 0;
    const parsedMax = max ? parseInt(max) : Infinity;

    if (parsedMin >= 0 && parsedMax > parsedMin) {
      getPrice(parsedMin, parsedMax);
    }
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    handleCustomPriceChange(value, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    handleCustomPriceChange(minPrice, value);
  };

  //! Filter Size
  const [categoryProductId, setCategoryProductId] = useState([]);
  const [categoryId, setCategoryId] = useState();

  async function getCategoryProductId() {
    try {
      let data = await fetch(`https://test.mybrands.az/api/v1/products/?categories=${categoryId}`).then(res => res.json());
      setCategoryProductId(data);
    } catch (error) {
      console.error("API çağrısında hata:", error);
    }
  }

  useEffect(() => {
    if (categoryId) {
      getCategoryProductId();
    }
  }, [categoryId]);

  function getCategoryId(event) {
    const id = event.target.value;
    setCategoryId(id);
  }

  useEffect(() => {
    getcategoryClick();
    getFilterCategory();
  }, [selectedCategoryId]);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function getProductDetailId(productId, productImage) {
    dispatch(setProductId(productId));
    dispatch(setProductImage(productImage))
    navigate("/product-detail");
  }

  function handleAddToWishlist(item) {
    if (!wishList.some((product) => product.id === item.id)) {
      dispatch(
        addToWishlist({
          id: item.id,
          title: item.product.title_az,
          image: `https://test.mybrands.az${item.image.items[0].file}`,
          price: item.price,
        })
      );
      notification.success({
        message: "Uğurlu əməliyyat",
        description: "Məhsul favoritlərə əlavə edildi!",
        placement: "topRight",
      });
    }
  }

  return (
    <div className="w-[85%] m-auto flex flex-col gap-10">
    {/* Qiymət və Axtarış bölmələri */}
    <div className="flex flex-col lg:flex-row lg:justify-between gap-10 w-full">
      {/* Qiymət Filtri */}
      <div className="w-full lg:w-[30%] sm:w-full gap-[.5px] mt-3">
        <div className="border-[1px] border-gray-200 px-5">
          <div
            className="flex items-center justify-between cursor-pointer text-center"
            onClick={() => setDisplayPrice(!displayPrice)}
          >
            <p className="text-xl pt-5">Qiymət</p>
            {displayPrice ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </div>
          <div className={`${displayPrice ? "hidden" : ""}`}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-5">
                <input
                  type="text"
                  placeholder="Min"
                  className="w-full p-4 bg-gray-100"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <input
                  type="text"
                  placeholder="Max"
                  className="w-full p-4 bg-gray-100"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
              <div className="flex flex-col gap-4 mt-2 pb-5">
                <div className="flex gap-2">
                  <input type="radio" name="1" onChange={() => handlePriceChange(0, 100)} />
                  <label> 0 - 100 AZN</label>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="1" onChange={() => handlePriceChange(100, 200)} />
                  <label> 100 - 200 AZN</label>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="1" onChange={() => handlePriceChange(200, 300)} />
                  <label> 200 - 300 AZN</label>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="1" onChange={() => handlePriceChange(300, Infinity)} />
                  <label> <i className="fa-solid fa-angle-right"></i> 300 AZN</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Axtarış */}
      <div className="flex gap-7 items-center  border-gray-200 rounded-sm py-1 px-2 w-full lg:w-[30%] sm:w-full">
        <input type="text" className="bg-gray-100 py-3 px-7 outline-none w-full" />
        <i className="fa-solid fa-magnifying-glass text-gray-500 cursor-pointer text-lg"></i>
      </div>
    </div>
  
    {/* Məhsullar */}
    <div className="w-full m-auto text-[15px]">
      <div className="flex justify-between items-center mb-5">
        <div className="mt-5 m-auto">
          <p className="text-gray-300 font-bold text-lg">{categoryLength} məhsul tapıldı</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
        {categoryLength > 0 ? (
          categoryClick.map((item, index) => (
            <div className="border-[1px] border-gray-300 rounded-lg shadow-sm relative group" key={index}>
              <div className="relative overflow-hidden group cursor-pointer">
                <img
                  onClick={() => getProductDetailId(item.product.id, item.image.items[0].file)}
                  src={item.image.items[0].file}
                  className="w-full h-[300px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-60 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => getProductDetailId(item.product.id, item.image.items[0].file)}
                    className="text-lg font-bold"
                  >
                    Ətraflı məlumat
                  </button>
                </div>
              </div>
              <div className="pl-5 pt-3">
                <p className="text-[17px] mt-5">{item.product.title_az}</p>
                <p className="text-xl font-bold">{item.price} AZN</p>
              </div>
            </div>
          ))
        ) : (
          <p className="m-auto text-gray-500 col-span-3">Uyğun məhsul tapılmadı.</p>
        )}
      </div>
    </div>
  </div>
  
  );
}
