import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setProductId as setSelectedProductId } from "./store/categoryProduct";
import { addToWishlist } from "./store/categoryProduct";
import { addToCard } from "./store/categoryProduct";
import { notification } from "antd";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);
  const selectedProductId = useSelector((state) => state.category.selectedProductId);
  const selectedProductImage = useSelector((state) => state.category.selectedProductImage);
  const dispatch = useDispatch();
  const defaultImage = selectedProductImage;
  const wishList = useSelector((state) => state.category.wishlist);
  const addCard = useSelector((state) => state.category.addcard);

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  async function fetchProductDetail() {
    try {
      const response = await fetch(`https://test.mybrands.az/api/v1/products/${selectedProductId}`);
      if (!response.ok) {
        throw new Error("Ürün bilgisi alınamadı.");
      }
      const data = await response.json();
      setProduct(data);
      console.log("detail",data)
  
      const firstImage = data?.variations?.[0]?.image?.items?.[0]?.file || defaultImage;
      setMainImage(firstImage);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id && id !== selectedProductId) {
      dispatch(setSelectedProductId(id));
    }
    if (selectedProductId) {
      fetchProductDetail();
    }
  }, [id, selectedProductId, dispatch]);

  useEffect(() => {
    setIsInWishlist(wishList.some((item) => item.id === product?.id));
    setIsInCart(addCard.some((item) => item.id === product?.id));
  }, [wishList, addCard, product]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (!product) {
    return <p>Ürün bilgisi bulunamadı.</p>;
  }

  const handleThumbnailClick = (imageFile) => {
    setMainImage(imageFile || defaultImage);
  };

  function handleAddToWishlist() {
    dispatch(addToWishlist({
      id: product.id,
      title: product.manufacturer.title,
      image: mainImage,
      price: product.variations[0].price,
    }));
    setIsInWishlist(true);
    notification.success({
      message: "Uğurlu əməliyyat",
      description: "Məhsul favoritlərə əlavə edildi!",
      placement: "topRight",
    });
  }

  function handleAddToCard() {
    dispatch(addToCard({
      id: product.id,
      title: product.manufacturer.title,
      image: mainImage,
      price: product.variations[0].price,
    }));
    setIsInCart(true);
    notification.success({
      message: "Uğurlu əməliyyat",
      description: "Məhsul carda əlavə edildi!",
      placement: "topRight",
    });
  }

  return (
    <div className="w-full md:w-[79%] mx-auto p-4 flex flex-col">
  <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_3fr] gap-8">
    <div className="flex flex-col md:flex-row gap-7 w-full">
      <div className="w-[85px] flex flex-col gap-2 cursor-pointer">
        {product?.variations?.[0]?.image?.items?.length > 0 ? (
          product.variations[0].image.items.map((img, index) => (
            <img
              key={index}
              src={img.file}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto"
              onClick={() => handleThumbnailClick(img.file)}
            />
          ))
        ) : (
          <p>Resimler mevcut değil.</p>
        )}
      </div>
      <div className="w-full">
  <Zoom>
    <img
      src={mainImage}
      alt="Main Product"
      className="w-full h-auto max-w-[500px] md:max-w-[500px] lg:max-w-full mx-auto"
    />
  </Zoom>
</div>
    </div>

    <div className="mt-6 flex flex-col items-center gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-bold">{product.manufacturer.title}</span>
        <span className="text-[13px] text-gray-400 text-center font-light">
          {product.categories[0].title_az}
        </span>
      </div>
      <div className="text-center text-xl font-bold">{product.variations[0].price} AZN</div>
      <div className="flex items-center gap-5 cursor-pointer text-sm">
        Kateqoriya: {product.gender.title_az}
      </div>
      <div className="text-red-500 text-lg flex items-center gap-5">
        <i className="fa-solid fa-clock-rotate-left"></i>
        MƏHDUD SAYDA
      </div>
      <div className="flex flex-col w-full md:w-[90%] gap-5">
        <button
          className={`py-3 px-7 text-xl ${
            isInCart ? 'bg-green-400' : 'bg-[#212D4A]'
          } text-white`}
          onClick={handleAddToCard}
          disabled={isInCart}
        >
          {isInCart ? "Səbətə əlavə olundu" : "Səbətə əlavə et"}
        </button>
        <button
          className={`py-3 px-7 text-xl ${
            isInWishlist ? 'bg-red-500 text-white' : 'text-[#212D4A] bg-gray-100'
          }`}
          onClick={handleAddToWishlist}
          disabled={isInWishlist}
        >
          <i
            className={`pr-4 ${
              isInWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
            }`}
          ></i>
          {isInWishlist ? "Arzu olunanlardadır" : "Arzu olunanlara əlavə et"}
        </button>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
    <div className="border-[1px] border-[#e0e0e0] px-5 py-5 h-[250px]">
      <h1 className="text-[15px] font-bold mb-4">MƏHSUL HAQQINDA ƏSAS MƏLUMAT</h1>
      <p className="text-[13px] mb-5">Məhsulun kodu: {product.sku}</p>
      <div className="text-[13px]">
        <p>- {product.category ? product.category[1].title_az : "Kategori bilgisi yok"}</p>
        <p>- {product.categories[0].title_az}</p>
        <p>- {product.gender ? product.gender.title_az : "Cinsiyet bilgisi yok"}</p>
      </div>
    </div>
    <div className="border-[1px] border-[#e0e0e0] px-5 py-5 h-[250px]">
      <h1 className="text-[15px] font-bold mb-4">MƏHSUL HAQQINDA YORUMLAR</h1>
      <div className="text-[13px]">
        <p>- Mehsul haqqında şərh yoxdur</p>
      </div>
    </div>
    <div className="border-[1px] border-[#e0e0e0] px-5 py-5 h-[250px]">
      <h1 className="text-[15px] font-bold mb-5">MƏHSUL HAQQINDA ƏTRAFLI MƏLUMAT</h1>
      <div className="text-[13px]">
        <p>- {product.title_az}</p>
        <p>- {product.season.title}</p>
      </div>
    </div>
  </div>
</div>

  );
}
