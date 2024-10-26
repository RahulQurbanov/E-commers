import { useEffect, useState } from "react"
import 'antd/dist/reset.css';
import { Carousel } from "antd";



export default function Main(){
    const [campaigns,setCampaings] = useState([]);

    async function getCampaings(){
        let data = await fetch('https://test.mybrands.az/api/v1/campaigns').then(res=>res.json());
        setCampaings(data)
        console.log(data);
    }

    useEffect(()=>{
        getCampaings()
    },[]);
    return <Carousel arrows dots autoplay autoplaySpeed={2000} className="w-[85%] m-auto">
      {campaigns && 
        campaigns.map((item,index)=>{
            return <img src={item.cover_photo_az} key={index} className="width-[20%] height: auto maxHeight:200px"/>
        })
      }
    </Carousel>
}