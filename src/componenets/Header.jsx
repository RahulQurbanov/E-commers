export default function Header(){
    return <div> 
       <div className="bg-gray-100   py-2">
       <div className="w-[85%] m-auto flex items-center justify-between">
       <div className="flex items-center gap-5 text-[12px]">
            <a href="#" className="hover:underline">Haqqımızda</a>
            <a href="#" className="hover:underline">Müştəri xidmətləri</a>
            <a href="#" className="hover:underline">Bloq</a>
        </div>
        <div>
            <form>
                <select className="bg-gray-100 text-[12px] cursor-pointer">
                    <option>AZ</option>
                    <option>EN</option>
                    <option>RU</option>
                </select>
            </form>
        </div>
       </div>
       </div>
       <div className="border-b-2 border-b-gray-200">
        <div className="w-[85%] m-auto flex justify-between items-center">
        <div className="flex items-center gap-5">
            <div className="mr-[35px]">
                <img src="./src/image/MBlogo.webp" alt="" className="w-[200px]"/>
            </div>
            <div className="text-[17px] text-gray-500 flex items-center  gap-3 cursor-pointer mt-1">
                <h2 className="border-l-gray-300 border-r-2 pr-[10px] hover:underline m-0">Kişilər</h2>
                <h2 className="border-l-gray-300 border-r-2 pr-[10px] hover:underline m-0">Qadınlar</h2>
                <h2 className="hover:underline m-0 ">Uşaqlar</h2>
            </div>
        </div>
        <div className="flex justify-between items-center gap-[35px] ">
            <div className="flex items-center gap-7 text-xl border-r-gray-200 border-r-2 pr-[35px]">
            <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
            <i class="fa-regular fa-heart cursor-pointer"></i>
            <i class="fa-solid fa-bag-shopping cursor-pointer"></i>
            </div>
            <div className="flex items-center gap-2 ">
            <i class="fa-regular fa-user cursor-pointer text-xl "></i>
            <form>
                <select className="cursor-pointer text-sm">
                    <option>Sizin hesabınız</option>
                </select>
            </form>
            </div>
        </div>
        </div>
       </div>
    </div>
}