import { useNavigate } from "react-router"

export default function WishList() {
   let navigateProduct = useNavigate();

   function getProduct() {
    navigateProduct("/product")
   }

   return <div className="bg-[#F4F4F4]">
    <div className="bg-[#F4F4F4] w-[85%] m-auto">
       <div className="flex justify-center items-center flex-col p-24 gap-5">
       <i class="fa-regular fa-heart cursor-pointer text-[40px] bg-white py-6 px-7 rounded-[999px] text-gray-300 mb-7"></i>
       <p className="text-[#131E38] text-[40px] font-bold">Arzuolunanlar siyahınız boşdur</p>
       <p className="text-[17px]">Məhsulu seçin</p>
       <button className="bg-[#131E38] w-[39%] m-auto p-5 text-white text-[17px] font-semibold" onClick={getProduct}>MƏHSULLARI GÖSTƏR</button>
       </div>
   </div>
   </div>
}