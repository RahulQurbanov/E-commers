import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "./store/categoryProduct";
import { useNavigate } from "react-router-dom";

export default function Catagory() {
    const [hover, setHover] = useState(false);
    const [shoesHover, setShoesHover] = useState(false);
    const [bagHover, setBagHover] = useState(false);
    const [beautyHover, setBeautyHover] = useState(false);
    const [homeHover, setHomeHover] = useState(false);
    const [clothes, setClothes] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [bags, setBags] = useState([]);
    const [beauty, setBeauty] = useState([]);
    const [home, setHome] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const dispatch = useDispatch();
    let navigate = useNavigate();

    function getProduct() {
        navigate("/product");
    }

    async function getClothes() {
        let clothesData = await fetch('https://test.mybrands.az/api/v1/products/categories?key=category&parent=2').then(res => res.json());
        let shoesData = await fetch('https://test.mybrands.az/api/v1/products/categories?key=category&parent=5').then(res => res.json());
        let bagsData = await fetch('https://test.mybrands.az/api/v1/products/categories?key=category&parent=1').then(res => res.json());
        let beautyData = await fetch('https://test.mybrands.az/api/v1/products/categories?key=category&parent=4').then(res => res.json());
        let homeData = await fetch('https://test.mybrands.az/api/v1/products/categories?key=category&parent=6').then(res => res.json());
        setClothes(clothesData);
        setShoes(shoesData);
        setBags(bagsData);
        setBeauty(beautyData);
        setHome(homeData);
    }

    useEffect(() => {
        getClothes();
    }, []);

    function handleCategoryClick(id) {
        dispatch(setCategoryId(id));
        navigate("/category-product");
    }

    return (
        <div className="border-b-2 border-b-gray-200 font-montserrat">
        <div className="w-[85%] m-auto relative overflow-visible">
            {/* Böyük ekranlar */}
            <div className="hidden sm:block">
                <ul className="flex flex-wrap items-center gap-5 pt-5 text-slate-950 cursor-pointer font-semibold">
                    <div 
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                        className="relative"
                    >
                        <li className="whitespace-nowrap">Geyimlər</li>
                        {hover && (
                            <div className="absolute left-0 top-full z-20 bg-white p-5 mt-1 shadow-lg rounded w-auto max-w-[1200px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                                {clothes.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)} className="hover:bg-gray-100 p-2 rounded text-left">
                                        {item.title_az}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setShoesHover(true)} 
                        onMouseLeave={() => setShoesHover(false)}
                        className="relative"
                    >
                        <li className="whitespace-nowrap">Ayaqqabılar</li>
                        {shoesHover && (
                            <div className="absolute left-0 top-full z-20 bg-white p-5 mt-1 shadow-lg rounded w-auto max-w-[1100px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                                {shoes.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)} className="hover:bg-gray-100 p-2 rounded text-left">
                                        {item.title_az}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setBagHover(true)} 
                        onMouseLeave={() => setBagHover(false)}
                        className="relative"
                    >
                        <li className="whitespace-nowrap">Çanta və Aksesuarlar</li>
                        {bagHover && (
                            <div className="absolute left-0 top-full z-20 bg-white p-5 mt-1 shadow-lg rounded w-auto max-w-[1000px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                                {bags.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)} className="hover:bg-gray-100 p-2 rounded text-left">
                                        {item.title_az}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setBeautyHover(true)} 
                        onMouseLeave={() => setBeautyHover(false)}
                        className="relative"
                    >
                        <li className="whitespace-nowrap">Gözəllik</li>
                        {beautyHover && (
                            <div className="absolute left-0 top-full z-20 bg-white p-5 mt-1 shadow-lg rounded w-auto max-w-[1000px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                                {beauty.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)} className="hover:bg-gray-100 p-2 rounded text-left">
                                        {item.title_az}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setHomeHover(true)} 
                        onMouseLeave={() => setHomeHover(false)}
                        className="relative"
                    >
                        <li className="whitespace-nowrap">Ev</li>
                        {homeHover && (
                            <div className="absolute left-0 top-full z-20 bg-white p-5 mt-1 shadow-lg rounded w-auto max-w-[850px] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                                {home.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)} className="hover:bg-gray-100 p-2 rounded text-left">
                                        {item.title_az}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </ul>
            </div>
    
            {/* Kiçik ekranlar */}
            <div className="block sm:hidden">
      {/* Kateqoriya Seçimi */}
      <select 
        onChange={(e) => {
          const selectedCategory = e.target.value;
          setSelectedCategory(selectedCategory); // Seçilən kateqoriyanı təyin edirik
        }} 
        className="w-full p-3 border rounded"
      >
        <option value="" selected>
          Kateqoriya seçin
        </option>
        {/* Geyimlər Kateqoriyası */}
        <option value="clothes">Geyimlər</option>
        {/* Ayaqqabılar Kateqoriyası */}
        <option value="shoes">Ayaqqabılar</option>
        {/* Çanta və Aksesuarlar Kateqoriyası */}
        <option value="bags">Çanta və Aksesuarlar</option>
        {/* Gözəllik Kateqoriyası */}
        <option value="beauty">Gözəllik</option>
        {/* Ev Kateqoriyası */}
        <option value="home">Ev</option>
      </select>

      {/* Seçilən Kateqoriyanın Alt Kateqoriyaları */}
      {selectedCategory && (
        <ul className="mt-4 space-y-2">
          {selectedCategory === "clothes" && clothes.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleCategoryClick(item.id)} 
              className="hover:bg-gray-100 p-2 rounded text-left cursor-pointer"
            >
              {item.title_az}
            </li>
          ))}
          {selectedCategory === "shoes" && shoes.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleCategoryClick(item.id)} 
              className="hover:bg-gray-100 p-2 rounded text-left cursor-pointer"
            >
              {item.title_az}
            </li>
          ))}
          {selectedCategory === "bags" && bags.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleCategoryClick(item.id)} 
              className="hover:bg-gray-100 p-2 rounded text-left cursor-pointer"
            >
              {item.title_az}
            </li>
          ))}
          {selectedCategory === "beauty" && beauty.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleCategoryClick(item.id)} 
              className="hover:bg-gray-100 p-2 rounded text-left cursor-pointer"
            >
              {item.title_az}
            </li>
          ))}
          {selectedCategory === "home" && home.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleCategoryClick(item.id)} 
              className="hover:bg-gray-100 p-2 rounded text-left cursor-pointer"
            >
              {item.title_az}
            </li>
          ))}
        </ul>
      )}
    </div>

        </div>
    </div>
    
    
    );
}
