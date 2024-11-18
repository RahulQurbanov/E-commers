export default function Footer(){
    return <div>
        <div className="bg-[#212D4A]">
            <div className="w-[75%] m-auto flex justify-between items-center text-white py-14">
                <div >
                    <h1 className="text-3xl font-bold mb-5">Bizi izləməyi unutmayın</h1>
                    <p className="text-gray-400 w-[490px]">Bizim müştərilər qrupuna qoşulun. Yeni məhsullar və aksiyalardan ilk xəbərdar olun.</p>
                </div>
                <div className="flex items-center gap-8 relative text-lg">
                    <div className="flex items-center gap-5">
                    <p className="text-gray-400">Bizi izləyin</p>
                    <p className="pb-3">__</p>
                    </div>
                    <div className="flex items-center gap-7 pb-[15px]">
                    <a href="https://www.facebook.com/mybrands.az/"><i class="fa-brands fa-facebook-f hover:scale-125"></i></a>
                    <a href="https://www.instagram.com/mybrands.az/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/novco-group-of-companies?originalSubdomain=ru"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/user/MYBRANDS1TV"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@mybrands.az"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[85%] m-auto flex justify-between mt-12">
            <div className="flex flex-col">
                <h2 className="text-lg font-bold mb-5">Şirkət</h2>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Haqqımızda</p></a>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold mb-5">Müştərilər</h2>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Ödəniş və Çatdırılma</p></a>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Qaytarılma siyasəti</p></a>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Müştəri xidmətləri</p></a>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold mb-5">Mağaza</h2>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Qadınlar</p></a>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Kişilər</p></a>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Uşaqlar</p></a>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Endirim</p></a>               
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold mb-5">Hesab</h2>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Qeydiyyat</p></a>
                <a href="#"><p className="cursor-pointer text-sm text-gray-500 hover:underline">Sifarişlərim</p></a>
            </div>
            <div className="flex flex-col gap-9">
            <div className="flex items-center gap-2">
            <i class="fa-regular fa-envelope text-2xl"></i>
            <a href="#"><p className="text-sm font-bold hover:underline m-0">help@mybrands.az</p></a>
            </div>
            <div>
                <h2 className="text-lg font-bold hover:underline cursor-pointer">+994504114114</h2>
                <p className="text-gray-500 text-sm">Online mağaza</p>
            </div>
            <div>
                <p className="w-[340px] text-gray-500 text-[12px]">Müştəri xidmətləri mərkəzimizlə hər gün 09:00 - 18:00-dək əlaqə saxlaya bilərsiniz.</p>
            </div>
            </div>
        </div>
        <div className="w-[85%] m-auto flex items-center gap-8 mt-7 border-b-2 border-b-gray-200 pb-10 ">
            <div className="flex items-center gap-3 bg-gray-100 w-[140px] py-2 px-5 rounded-sm text-center">
                <div>
                <i class="fa-brands fa-apple text-3xl"></i>
                </div>
                <div className="text-start">
                    <p className="text-[8px]">Download on</p>
                    <h2 className="text-[12px] font-bold">App Store</h2>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 w-[150px] py-2 px-5 rounded-sm text-center">
                <div>
                <i class="fa-brands fa-google-play text-2xl"></i>
                </div>
                <div className="text-start">
                    <p className="text-[8px]">Download on</p>
                    <h2 className="text-[12px] font-bold">Google Play</h2>
                </div>
            </div>
        </div>
        <div className="w-[85%] m-auto flex justify-between items-center text-[12px] my-5">
            <div>
             <p className="cursor-text">© MYBRANDS - BÜTÜN HÜQUQLAR QORUNUR</p>
            </div>
            <div className="flex items-center gap-7">
                <p className="cursor-pointer hover:underline">Məxfilik Siyasəti </p>
                <p className="cursor-pointer hover:underline">İstifadənin ümumi müddəaları və şərtləri</p>
            </div>
        </div>
    </div>
}