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
    <div className="w-[85%] m-auto">
       <div>
        <h1 className="text-[#131E38;] text-3xl font-bold my-10">HAZIRDA TREND</h1>
       </div>
       <div  className="flex items-center gap-5">
       <div>
      <div className="relative">
      <img src="./src/image/cins2.jpeg" alt="" className="w-[85%] " />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-2 left-3 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Cins</p>
       <p className="text-lg font-bold">$200.00</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/sviter.jpeg" alt="" className="w-[85%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-2 left-3 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Sviter</p>
       <p className="text-lg font-bold">$199.99</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/qisaqol.jpeg" alt="" className="w-[85%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-2 left-3 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Polo</p>
       <p className="text-lg font-bold">$109.99</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/bag.jpeg" alt="" className="w-[85%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-2 left-3 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Çanta</p>
       <p className="text-lg font-bold">$299.99</p>
       </div>
       <div>
      <div className="relative">
      <img src="./src/image/cins.jpeg" alt="" className="w-[85%]" />
      <i class="fa-regular fa-heart cursor-pointer absolute bottom-2 left-3 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
      </div>
       <p className="text-[15px] text-gray-500 mt-4 mb-6">Calvin Kleins, Cins</p>
       <p className="text-lg font-bold">$200.00</p>
       </div>
       </div>
    </div>
</>
}