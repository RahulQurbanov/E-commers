import { useEffect, useState } from "react"
import 'antd/dist/reset.css';
import { Carousel } from "antd";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "./store/categoryProduct";


export default function Main(){
    const [campaigns,setCampaings] = useState([]);
    const [trend, setTrend] = useState([]);
    const dispatch = useDispatch();
    const selectedCategoryId = useSelector((state) => state.category.selectedCategoryId);

    async function getTrendProduct(){
      let data = await fetch('https://test.mybrands.az/api/v1/products/top-sale-trend-products/').then(res => res.json());
      let trendProduct = data.trend_products;
      setTrend(trendProduct);
    }
    async function getCampaings(){
        let data = await fetch('https://test.mybrands.az/api/v1/campaigns').then(res=>res.json());
        setCampaings(data)
    }
    
    useEffect(()=>{
        getCampaings();
        getTrendProduct();
    },[]);

    const sliderSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll:5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return<>
    <Carousel arrows dots autoplay autoplaySpeed={2000} className="w-[85%] m-auto">
      {campaigns && 
        campaigns.map((item,index)=>{
            return <img src={item.cover_photo_az} key={index} className="width-[20%] height: auto maxHeight:200px"/>
        })
      }
    </Carousel>
    <div className="w-[85%] m-auto font-montserrat">
        <div>
          <h1 className="text-[#131E38] text-3xl font-bold my-10">HAZIRDA TREND</h1>
        </div>
        <div className="relative">
          <Slider {...sliderSettings}>
            {trend &&
              trend.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="relative">
                    <img
                      src={`https://test.mybrands.az${item.image.items[0].file}`}
                      className="w-[1050px] h-[300px]"
                      alt="Trend Ürün"
                    />
                    <i className="fa-regular fa-heart cursor-pointer absolute bottom-3 left-4 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
                  </div>
                  <p className="text-[15px] text-gray-500 mt-4 mb-6">{item.product.title_az}</p>
                  <p className="text-lg font-bold">${item.price}</p>
                </div>
              ))}
          </Slider>
        </div>
      </div>

    <div className="w-[85%] m-auto grid grid-cols-2 mt-28 gap-5">
      <div>
        <div className="bg-[url('./src/image/sweatshirt.png')] bg-cover h-[620px] w-[100%] relative">
          <p className="absolute text-[41px] text-white bottom-28 left-[67px] font-bold">Yeni sviterlər</p>
          <button
          onClick={() => dispatch(setCategoryId(1))}
          className="bg-white py-4 px-8 text-blue-950 text-sm font-bold absolute bottom-20 left-[68px] hover:mb-1 hover:transition-transform duration-300 ease-in-out">İNDİ AL</button>
        </div>
      </div>
      <div>
        <div className="bg-[url('./src/image/shoes.png')] bg-cover h-[620px] w-[100%] relative">
          <p className="absolute text-[41px] text-white bottom-28 left-[67px] font-bold">YENİ AYAQQABILAR</p>
          <button
  onClick={() => {
    console.log('Category ID dispatched: 1');
    dispatch(setCategoryId(1));
  }}
  className="bg-white py-4 px-8 text-blue-950 text-sm font-bold absolute bottom-20 left-[68px] hover:mb-1 hover:transition-transform duration-300 ease-in-out">
  İNDİ AL
</button>

        </div>
      </div>
    </div>
    <div className="w-[85%] m-auto grid grid-cols-3 mt-5 mb-12 gap-5">
      <div className="relative overflow-hidden group cursor-pointer">
        <img src="./src/image/sport.png" alt="sport" className="h-[400px] w-[100%] transition-transform duration-700 ease-in-out transform group-hover:scale-110" />
        <p className="text-xl px-5 font-bold text-cyan-950 absolute transition-transform duration-700 ease-in-out transform  group-hover:bottom-1">ADİDAS YENİ KOLLEKSİYA</p>
      </div>
      <div className="relative  overflow-hidden group cursor-pointer">
        <img src="./src/image/new_bag.png" alt="bags" className="h-[400px] w-[100%] transition-transform duration-700 ease-in-out transform group-hover:scale-110" />
        <p className="text-xl px-10 font-bold text-cyan-950 absolute transition-transform duration-700 ease-in-out transform  group-hover:bottom-1">YENİ ÇANTALAR</p>
      </div>
      <div className="relative  overflow-hidden group cursor-pointer">
        <img src="./src/image/clothes.png" alt="clothes" className="h-[400px] w-[100%] transition-transform duration-700 ease-in-out transform group-hover:scale-110" />
        <p className="text-xl px-10 font-bold text-cyan-950 absolute transition-transform duration-700 ease-in-out transform  group-hover:bottom-1">YENİ ÜST GEYİMİ</p>
      </div>
    </div>
</>
}


