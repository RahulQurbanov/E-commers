import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    const wishlist = useSelector((state) => state.category.wishlist);
    const addcard = useSelector((state) => state.category.addcard)

    function getLogin() {
        navigate("/login");
    }

    function getMain() {
        navigate("/");
    }

    function getWishList() {
        navigate("/wishlist");
    }
    function getAddToCard() {
        navigate("/add-card")
    }
    return (
        <div>
            <div className="bg-black text-white py-2">
                <div className="w-[85%] m-auto flex items-center justify-between">
                    <div className="flex items-center gap-5 text-[12px]">
                        <a href="#" className="hover:underline">Haqqımızda</a>
                        <a href="#" className="hover:underline">Müştəri xidmətləri</a>
                        <a href="#" className="hover:underline">Bloq</a>
                    </div>
                    <div>
                        <form>
                            <select className="bg-black text-white text-[12px] cursor-pointer">
                                <option>AZ</option>
                                <option>EN</option>
                                <option>RU</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-b-gray-200  bg-white ">
                <div className="w-[85%] m-auto flex justify-between items-center py-3">
                    <div className="flex items-center gap-5">
                        <div onClick={getMain} className="mr-[35px] cursor-pointer">
                            <img src="./src/image/MBlogo.webp" alt="" className="w-[200px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-[35px]">
                        <div className="flex items-center gap-7 text-xl border-r-gray-200 border-r-2 pr-[35px]">
                            <div className="relative" onClick={getWishList}>
                                <span className="text-[11px] px-[7px] h-[27px] rounded-full font-bold absolute left-5 bottom-4 bg-[#717fe0] text-white  cursor-pointer">
                                    {wishlist.length}
                                </span>
                                <i
                                    className={`cursor-pointer fa-solid fa-heart text-2xl hover:text-[#717fe0]`}
                                ></i>
                            </div>
                            <div className="relative">
                                <span className="text-[11px] px-[7px] h-[27px] rounded-full font-bold absolute left-5 bottom-4 bg-[#717fe0] text-white  cursor-pointer">
                                    {addcard.length}
                                </span>
                                <i onClick={getAddToCard}
                                    className={`cursor-pointer fa-solid fa-cart-shopping text-2xl hover:text-[#717fe0]`}
                                ></i>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-regular fa-user cursor-pointer text-xl"></i>
                            <form onClick={getLogin}>
                                <select className="cursor-pointer text-sm">
                                    <option>Sizin hesabınız</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
