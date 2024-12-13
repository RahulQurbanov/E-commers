import { useEffect, useState } from "react";
import 'antd/dist/reset.css';
import { Carousel } from "antd";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "./store/categoryProduct";

export default function Main() {
    const [campaigns, setCampaings] = useState([]);
    const [trend, setTrend] = useState([]);
    const dispatch = useDispatch();
    const selectedCategoryId = useSelector((state) => state.category.selectedCategoryId);

    const [timeLeft, setTimeLeft] = useState(30 * 24 * 60 * 60);

    async function getTrendProduct() {
        let data = await fetch('https://test.mybrands.az/api/v1/products/top-sale-trend-products/').then(res => res.json());
        let trendProduct = data.trend_products;
        setTrend(trendProduct);
    }

    async function getCampaings() {
        let data = await fetch('https://test.mybrands.az/api/v1/campaigns').then(res => res.json());
        setCampaings(data);
    }

    useEffect(() => {
        getCampaings();
        getTrendProduct();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatTime = (time) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;
        return (
            <span>
                <span className="text-5xl font-bold mr-2 text-red-700">{days}</span><span className="text-sm">Gün</span> 
                <span className="text-5xl font-bold mx-2 text-red-700">{hours}</span><span className="text-sm">Saat</span> 
                <span className="text-5xl font-bold mx-2 text-red-700">{minutes}</span><span className="text-sm">Dəq</span> 
                <span className="text-5xl font-bold ml-2 text-red-700">{seconds}</span><span className="text-sm">San</span>
            </span>
        );
    };

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
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

    return (
        <>
            <Carousel arrows dots autoplay autoplaySpeed={2000} className="w-[85%] m-auto">
                {campaigns && campaigns.map((item, index) => (
                    <img
                        src={item.cover_photo_az}
                        key={index}
                        className="width-[20%] height: auto maxHeight:200px"
                    />
                ))}
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
                                    <p className="text-lg font-bold">{item.price} AZN</p>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
            <div className="w-[85%] m-auto flex rounded-3xl">
                <div className="w-[35%]">
                    <img src="./src/image/sport.png" className="w-full " alt="shoes" />
                </div>
                <div className="bg-gray-50 text-center flex flex-col items-center w-[65%]">
                    <div className="bg-white rounded-full w-[40%] py-[95px] mt-5">
                        <span className="text-2xl font-bold">Endirim</span>
                        <h1 className="text-[40px] text-red-600 font-bold mb-3">Bayram 2025</h1>
                        <span className="text-2xl font-bold">Satış 50%</span>
                    </div>
                    <div className="mt-10">
                        <p>{formatTime(timeLeft)}</p>
                    </div>
                </div>
            </div>
            <div className="w-[85%] m-auto flex justify-between items-center text-center bg-gray-50 p-11 mt-10 mb-10 rounded-xl">
               <div className="flex flex-col gap-1 border-r-2 border-gray-200 pr-[40px]">
               <i class="fa-solid fa-truck text-3xl"></i>
               <span className="font-bold">Sürətli və Pulsuz Çatdırılma</span>
               <span className="text-[13px] text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
               </div>
               <div className="flex flex-col gap-1 border-r-2 border-gray-200 pr-[40px]">
               <i class="fa-solid fa-credit-card text-3xl"></i>
               <span className="font-bold">Təhlükəsiz Ödəniş</span>
               <span className="text-[13px] text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
               </div>
               <div className="flex flex-col gap-1 border-r-2 border-gray-200 pr-[40px]">
               <i class="fa-solid fa-money-bill text-3xl"></i>
               <span className="font-bold">Pul Geri Zəmanət</span>
               <span className="text-[13px] text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
               </div>
               <div className="flex flex-col gap-1 ">
               <i class="fa-solid fa-comments text-3xl"></i>
               <span className="font-bold">Onlayn Dəstək</span>
               <span className="text-[13px] text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
               </div>
            </div>
        </>
    );
}
