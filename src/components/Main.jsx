import { useEffect, useState } from "react";
import 'antd/dist/reset.css';
import { Carousel } from "antd";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "./store/categoryProduct";
import { notification } from "antd";

export default function Main() {
    const [campaigns, setCampaings] = useState([]);
    const [trend, setTrend] = useState([]);
    const dispatch = useDispatch();
    
    const calculateTimeLeft = () => {
        const now = new Date();
        const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
        const difference = endOfYear - now;
        return difference > 0 ? Math.floor(difference / 1000) : 0;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (time) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;
        return (
            <span className="flex flex-wrap justify-center items-end text-center">
                <span className="text-xl sm:text-3xl font-bold mr-1 text-red-700">{days}</span>
                <span className="text-sm sm:text-base text-black font-bold mr-4">Gün</span>
                <span className="text-xl sm:text-3xl font-bold mr-1 text-red-700">{hours}</span>
                <span className="text-sm sm:text-base text-black font-bold mr-4">Saat</span>
                <span className="text-xl sm:text-3xl font-bold mr-1 text-red-700">{minutes}</span>
                <span className="text-sm sm:text-base text-black font-bold mr-4">Dəq</span>
                <span className="text-xl sm:text-3xl font-bold mr-1 text-red-700">{seconds}</span>
                <span className="text-sm sm:text-base text-black font-bold">San</span>
            </span>
        );
    };

    async function getTrendProduct() {
        let data = await fetch('https://test.mybrands.az/api/v1/products/top-sale-trend-products/').then(res => res.json());
        setTrend(data.trend_products || []);
    }

    async function getCampaings() {
        let data = await fetch('https://test.mybrands.az/api/v1/campaigns').then(res => res.json());
        setCampaings(data || []);
    }

    useEffect(() => {
        getCampaings();
        getTrendProduct();
    }, []);

    const wishlist = useSelector(state => state.category.wishlist); 
    const handleAddToWishlist = (item) => {
        if (!wishlist.some((product) => product.id === item.id)) {
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
    };

    const isItemInWishlist = (item) => wishlist.some((product) => product.id === item.id);

    return (
        <>
            <Carousel arrows dots autoplay autoplaySpeed={2000} className="w-[85%] m-auto">
                {campaigns.map((item, index) => (
                    <img
                        src={item.cover_photo_az}
                        key={index}
                        className="w-full object-cover rounded-lg"
                        alt={`Campaign ${index + 1}`}
                    />
                ))}
            </Carousel>
        
            <div className="w-[85%] m-auto font-montserrat">
                <h1 className="text-[#131E38] text-2xl sm:text-3xl font-bold my-6">HAZIRDA TREND</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
                    {trend.map((item, index) => (
                        <div key={index} className="border-gray-200 border-2 rounded-lg group">
                            <div className="relative overflow-hidden group cursor-pointer">
                                <img
                                    src={`https://test.mybrands.az${item.image.items[0].file}`}
                                    className="w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-t-lg object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                                    alt="Trend Product"
                                />
                                <i
                                    onClick={() => handleAddToWishlist(item)}
                                    className={`fa-regular fa-heart absolute bottom-3 left-4 text-xl bg-gray-100 py-1 px-2 rounded-full transition-transform ${
                                        isItemInWishlist(item) ? 'text-white bg-red-500' : 'text-gray-500'
                                    } hover:scale-110`}
                                ></i>
                            </div>
                            <div className="p-4">
                                <p className="text-sm sm:text-base lg:text-lg text-gray-500">{item.product.title_az}</p>
                                <p className="text-sm sm:text-lg font-bold">{item.price} AZN</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[80vh] 2xl:h-[70vh]">
                <video src="./src/assets/audio/snow.mp4" autoPlay loop muted className="w-full h-full object-cover" />
                <div className="absolute top-[30%] left-[5%] bg-white bg-opacity-75 py-10 px-6 rounded-lg max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-2xl w-[90%] sm:w-[50%] lg:w-[35%] 2xl:w-[40%]">
                    <h1 className="text-xl font-black text-red-700 mb-2 sm:text-2xl lg:text-3xl 2xl:text-4xl text-center">BAYRAM ENDİRİMİ</h1>
                    <p className="text-xl text-red-700 font-black mb-4 sm:text-2xl lg:text-3xl 2xl:text-4xl text-center">50%</p>
                    <div className="text-sm sm:text-lg">{formatTime(timeLeft)}</div>
                </div>
            </div>
        
            <div className="w-[85%] m-auto flex flex-col sm:flex-row justify-between items-center text-center bg-gray-50 p-8 mt-8 rounded-xl shadow-lg gap-5">
                <div className="flex flex-col items-center gap-1 sm:border-r-2 sm:pr-[40px]">
                    <i className="fa-solid fa-truck text-2xl"></i>
                    <span className="font-black text-sm">Sürətli və Pulsuz Çatdırılma</span>
                    <span className="text-xs text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
                </div>
                <div className="flex flex-col items-center gap-1 sm:border-r-2 sm:pr-[40px]">
                    <i className="fa-solid fa-credit-card text-2xl"></i>
                    <span className="font-black text-sm">Təhlükəsiz Ödəniş</span>
                    <span className="text-xs text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
                </div>
                <div className="flex flex-col items-center gap-1 sm:border-r-2 sm:pr-[40px]">
                    <i className="fa-solid fa-money-bill text-2xl"></i>
                    <span className="font-black text-sm">Pul Geri Zəmanət</span>
                    <span className="text-xs text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <i className="fa-solid fa-comments text-2xl"></i>
                    <span className="font-black text-sm">Onlayn Dəstək</span>
                    <span className="text-xs text-gray-400">Bütün sifarişlərdə pulsuz çatdırılma</span>
                </div>
            </div>
        </>
    );
}
