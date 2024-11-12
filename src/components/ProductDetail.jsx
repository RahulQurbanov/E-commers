import React from "react";
import ReactImageMagnify from "react-image-magnify";

export default function ProductDetail() {
  return (
    <div className="w-[79%] m-auto p-4 flex flex-col">
      <div className="flex gap-32">
      <div className="flex gap-7 w-[42%] m-auto">
        {/* Thumbnail Images */}
        <div className="w-[85px] flex flex-col gap-2 cursor-pointer">
          <img src="./src/image/bag.jpeg" alt="Thumbnail 1" className="w-full h-auto" />
          <img src="./src/image/bag.jpeg" alt="Thumbnail 2" className="w-full h-auto" />
          <img src="./src/image/bag.jpeg" alt="Thumbnail 3" className="w-full h-auto" />
        </div>

        {/* Zoomable Main Image */}
        <div className="w-[500px]">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Main Product",
                isFluidWidth: true,
                src: "./src/image/bag.jpeg",
              },
              largeImage: {
                src: "./src/image/bag.jpeg",
                width: 1200,
                height: 1000,
              },
              lensStyle: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
            }}
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-6 flex flex-col items-center gap-6 w-[58%] font-circe">
       <div className="flex flex-col gap-[1px]">
        <span className="text-2xl font-bold">Calvin Klein</span>
        <span className="text-[13px] text-gray-400 text-center font-light">Çantalarlar</span>
       </div>
       <div className="flex flex-col gap-2">
        <span className="text-center text-xl font-bold">189$</span>
        <a href="#" className="underline text-[12px]">Çatdırılma və geri qaytarılma haqqında məlumat</a>
       </div>
       <div>
       <div className="flex items-center gap-2 cursor-pointer">
       <p className="underline">S</p>
       <p>M</p>
       <p>XL</p>
       <p>XXL</p>
       </div>
        <div className="flex flex-col items-center">
            <p className="underline">Ölçü cədvəli</p>
            <div className="flex flex-col gap-[1px] items-center">
            <p className="w-[19px] rounded-full bg-black text-center">.</p>
            <span>Qara</span>
            </div>
        </div>
       </div>
       <div className="text-red-600 text-xl">
        <p><i class="fa-solid fa-clock-rotate-left pr-3"></i>Məhdud sayda</p>
       </div>
       <div className="flex flex-col w-[90%] gap-[20px]">
        <button className="bg-[#212D4A] text-white py-3 px-7 text-xl">Səbətə əlavə et</button>
        <button className="text-[#212D4A] bg-gray-100 py-3 px-7 text-xl"><i class="fa-regular fa-heart pr-4"></i>Arzu olunanlara elave et</button>
       </div>
      </div>
      </div>
      <div className="w-[100%] flex items-center gap-5 mt-20">
      <div className="border-[1px] border-[#e0e0e0] w-[32%] px-12 py-5">
        <h1 className="text-[15px] font-bold mb-4">MƏHSUL HAQQINDA ƏSAS MƏLUMAT</h1>
        <p className="text-[13px] mb-5">Məhsulun kodu:K50K512116</p>
        <div className="text-[13px]">
            <p>- Çantalar</p>
            <p>- Çanta və aksesuarlar</p>
            <p>- KİŞİLƏR</p>
            <p>- FW24</p>
            <p>- Calvin Klein</p>
        </div>
      </div>
      <div className="border-[1px] border-[#e0e0e0] w-[32%] h-[250px] px-12 py-5">
        <h1 className="text-[15px] font-bold mb-5">MƏHSUL HAQQINDA ƏTRAFLI MƏLUMAT</h1>
      </div>
      <div className="border-[1px] border-[#e0e0e0] w-[30%] px-12 py-5 h-[250px]">
        <h1 className="text-[15px] font-bold mb-5">Seçilmiş parametrlər</h1>
        <div className="text-[14px]">
            <p>- Ölçü: no size</p>
            <p>- Rəng: no color</p>
        </div>
      </div>
      </div>
    </div>
  );
}

