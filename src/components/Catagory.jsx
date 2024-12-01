import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCategoryId } from "./store/categoryProduct";

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

    const dispatch = useDispatch();
    let navigate = useNavigate();

    function getProduct(){
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
            <div className="w-[85%] m-auto relative">
                <ul className="flex items-center gap-5 pt-5 text-slate-950 cursor-pointer font-semibold relative">
                    <li onClick={getProduct}>Məhsullar</li>
                    <li>Brendlər</li>
                    <li>Rəqəmsal Hədiyyə kartları</li>
                    <div 
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                    >
                        <li>Geyimler</li>
                        {hover && (
                            <div className="absolute right-0 font-normal z-10 bg-white p-10 mt-1 shadow-lg rounded  w-[900px] grid grid-cols-3 place-content-center text-sm gap-3">
                                {clothes.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)}>{item.title_az}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setShoesHover(true)} 
                        onMouseLeave={() => setShoesHover(false)}
                    >
                        <li>Ayaqqabılar</li>
                        {shoesHover && (
                            <div className="absolute right-0 font-normal z-10 bg-white p-10 mt-1 shadow-lg rounded  w-[900px] grid grid-cols-3 place-content-center text-sm gap-3">
                                {shoes.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)}>{item.title_az}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setBagHover(true)} 
                        onMouseLeave={() => setBagHover(false)}
                    >
                        <li>Çanta və Aksesuarlar</li>
                        {bagHover && (
                            <div className="absolute right-0 font-normal z-10 bg-white p-10 mt-1 shadow-lg rounded  w-[800px] grid grid-cols-3 place-content-center text-sm gap-3">
                                {bags.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)}>{item.title_az}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setBeautyHover(true)} 
                        onMouseLeave={() => setBeautyHover(false)}
                    >
                        <li>Gözəllik</li>
                        {beautyHover && (
                            <div className="absolute right-0 font-normal z-10 bg-white p-10 mt-1 shadow-lg rounded  w-[800px] grid grid-cols-3 place-content-center text-sm gap-3">
                                {beauty.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)}>{item.title_az}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        onMouseEnter={() => setHomeHover(true)} 
                        onMouseLeave={() => setHomeHover(false)}
                    >
                        <li>Ev</li>
                        {homeHover && (
                            <div className="absolute right-0 font-normal z-10 bg-white p-10 mt-1 shadow-lg rounded  w-[800px] grid grid-cols-3 place-content-center text-sm gap-3">
                                {home.map((item, index) => (
                                    <p key={index} onClick={() => handleCategoryClick(item.id)}>{item.title_az}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <li className="text-red-500">Endirim</li>
                </ul>
            </div>
        </div>
    );
}
