import { useEffect, useState } from "react"
import 'antd/dist/reset.css';
import { Carousel } from "antd";


export default function Main(){
    const [campaigns,setCampaings] = useState([]);
    async function getCampaings(){
        let data = await fetch('https://test.mybrands.az/api/v1/campaigns').then(res=>res.json());
        setCampaings(data)
    }
    useEffect(()=>{
        getCampaings()
    },[])
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
        <h1 className="text-[#131E38;] text-3xl font-bold my-10">HAZIRDA TREND</h1>
       </div>
       <div  className="flex items-center gap-5">
       <div>
      <div className="relative">
      <img src="./src/image/cins2.jpeg" alt="" className="w-[100%] " />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-3 left-4 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Cins</p>
       <p className="text-lg font-bold">$200.00</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/sviter.jpeg" alt="" className="w-[97%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-3 left-4 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Sviter</p>
       <p className="text-lg font-bold">$199.99</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/qisaqol.jpeg" alt="" className="w-[97%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-3 left-4 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Polo</p>
       <p className="text-lg font-bold">$109.99</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/bag.jpeg" alt="" className="w-[100%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-3 left-4 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Çanta</p>
       <p className="text-lg font-bold">$299.99</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/cins.jpeg" alt="" className="w-[100%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-3 left-4 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Cins</p>
       <p className="text-lg font-bold">$200.00</p>
       </div>
       </div>
    </div>
    <div className="w-[85%] m-auto grid grid-cols-2 mt-28 gap-5">
      <div>
        <div className="bg-[url('./src/image/sweatshirt.png')] bg-cover h-[620px] w-[100%] relative">
          <p className="absolute text-[41px] text-white bottom-28 left-[67px] font-bold">Yeni sviterlər</p>
          <button className="bg-white py-4 px-8 text-blue-950 text-sm font-bold absolute bottom-20 left-[68px] hover:mb-1 hover:transition-transform duration-300 ease-in-out">İNDİ AL</button>
        </div>
      </div>
      <div>
        <div className="bg-[url('./src/image/shoes.png')] bg-cover h-[620px] w-[100%] relative">
          <p className="absolute text-[41px] text-white bottom-28 left-[67px] font-bold">YENİ AYAQQABILAR</p>
          <button className="bg-white py-4 px-8 text-blue-950 text-sm font-bold absolute bottom-20 left-[68px] hover:mb-1 hover:transition-transform duration-300 ease-in-out">İNDİ AL</button>
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