import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        {/* Üst Panel */}
        <div className="bg-black text-white py-2">
          <div className="w-[85%]  m-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-5 text-[10px] sm:text-[12px]">
              <a href="#" className="hover:underline">Haqqımızda</a>
              <a href="#" className="hover:underline">Müştəri xidmətləri</a>
              <a href="#" className="hover:underline">Bloq</a>
            </div>
            <form>
              <select className="bg-black text-white text-[10px] sm:text-[12px] cursor-pointer p-1">
                <option>AZ</option>
                <option>EN</option>
                <option>RU</option>
              </select>
            </form>
          </div>
        </div>
      
        {/* Logo və Funksiyalar */}
        <div className="border-b-2 border-gray-200 bg-white">
          <div className="w-[85%] m-auto flex flex-wrap justify-between items-center py-3 gap-4">
            <div onClick={getMain} className="flex items-center gap-5 cursor-pointer text-center">
              <h1 className="text-2xl sm:text-3xl font-black text-[#002244]">SHOPLAND</h1>
            </div>
            <div className="flex flex-wrap items-center gap-5 sm:gap-10">
              <div className="flex items-center gap-5 sm:gap-7 border-r-2 border-gray-200 pr-5">
                <div className="relative" onClick={getWishList}>
                  <span className="absolute left-5 bottom-4 bg-[#717fe0] text-white text-[8px] sm:text-[11px] px-2 py-1 rounded-full">
                    {wishlist.length}
                  </span>
                  <i className="fa-solid fa-heart text-2xl cursor-pointer hover:text-[#717fe0]"></i>
                </div>
                <div className="relative" onClick={getAddToCard}>
                  <span className="absolute left-5 bottom-4 bg-[#717fe0] text-white text-[8px] sm:text-[11px] px-2 py-1 rounded-full">
                    {addcard.length}
                  </span>
                  <i className="fa-solid fa-cart-shopping text-2xl cursor-pointer hover:text-[#717fe0]"></i>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-user text-lg lg:text-xl cursor-pointer"></i>
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
