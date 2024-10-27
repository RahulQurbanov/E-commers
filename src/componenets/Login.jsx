import { useState } from "react";

export default function Login(){
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('')
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months =['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun','İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
    const years = Array.from({length: 100}, (_, i)=>new Date().getFullYear() - i);
    return <div className="bg-gray-100 flex items-center justify-center">
        <div className="w-[40%] m-auto bg-white px-10 py-5 my-10 ">
        <div className="flex justify-center items-center text-lg cursor-pointer w-[100%]">
            <p className="bg-cyn-950 py-4 px-[70px] text-whte">Daxil olun</p>
            <p className="bg-cyan-950 py-4 px-[70px] text-white">Qeydiyyatdan keçin</p>
        </div>
        <div>
           <div className="flex justify-center items-center mt-7">
                <h1 className="text-3xl font-bold">Qoşulun</h1>
           </div>
            <div className="flex justify-center items-center text-lg cursor-pointer mt-7">
                <p className="bg-cyan-950 py-4 px-[62px] text-white">e-poçt ilə</p>
                <p className="bg-cyn-950 py-4 px-[62px] text-whte">Mybrands kartı ilə</p>
            </div>
            <div className="w-[77%] flex flex-col m-auto gap-5 text-black mt-5">
                {/* <input type="text" placeholder="Email adress" className="p-3 w-[100%] border-2 border-slate-200" />
                <input type="text" value={"+994"} className="p-3 w-[100%] border-2 border-slate-200" />
                <div className="flex gap-5">
                    <input type="text" placeholder="Ad" className="p-3 w-[100%] border-2 border-slate-200" />
                    <input type="text" placeholder="Soyad" className="p-3 w-[100%] border-2 border-slate-200"/>
                </div>
                <input type="password" placeholder="Şifrə" className="p-3 w-[100%] border-2 border-slate-200" />
                <input type="password" placeholder="Şifrəni təsdiq edin" className="p-3 w-[100%] border-2 border-slate-200" />
                 <div className="flex  flex-col gap-1">
                <div>
                <p>Doğum tarixi</p>
                </div>
                <div className="flex items-center gap-5 w-[100%]">
                <select className="p-3 w-[100%] border-2 border-slate-200" value={day} onChange={(e) => setDay(e.target.value)}>
                   <option>Gün</option>
                   {
                    days.map((d)=>(
                        <option key={d} value={d}>{d}</option>
                    ))
                   }
                </select>
            <select className="p-3 w-[100%] border-2 border-slate-200" value={month} onChange={(e) => setMonth(e.target.value)}>
            <option>Ay</option>
            {months.map(m=>(
                <option key={m} value={m}>{m}</option>
            ))}
            </select>
            <select className="p-3 w-[100%] border-2 border-slate-200" value={year} onChange={(e) => setYear(e.target.value)}>
                <option>Year</option>
                {
                    years.map(y=>(
                        <option key={y} value={y}>{y}</option>
                    ))
                }
            </select>
                </div>
                 </div>
                 <div>
                <p>Cins</p>
                <div className="flex gap-7 ">
                    <div className="flex gap-2">
                    <input type="radio" name={1} />
                    <label htmlFor="">Kişi</label>
                    </div>
                    <div className="flex gap-2">
                    <input type="radio" name={1} />
                    <label htmlFor="">Qadın</label>
                    </div>
                </div>
            </div> */}
             <div className="flex justify-center items-center flex-col w-[100%] m-auto">
                <div className="flex text-xl mt-10">
                <p className="border-b-black border-b-2 px-7">BONUS KARTI İLƏ</p>
                <p className="border-b-gray-200 border-b-2 px-7">NÖMRƏ İLƏ</p>
                </div>
                <div className="flex justify-center items-center flex-col w-[100%] gap-5 mt-5 ">
                   <input type="text" placeholder="E-mail ünvanı" className="w-[100%] p-3 border-2 border-slate-200"/>
                   <input type="password" placeholder="Şifrə" className="w-[100%] p-3 border-2 border-slate-200" />
                   <input type="password" placeholder="Şifrəni təsdiq edin" className="w-[100%] p-3 border-2 border-slate-200" />
                   <input type="text" placeholder="Bonus kartının nömrəsi" className="w-[100%] p-3 border-2 border-slate-200 mb-5" />
                </div> 
            </div> 
            <div className="w-[100%] m-auto">
                <span className="text-[13px]">Hesab yaratmaqla bizim <span className="underline cursor-pointer">Şərt və Qaydalarımızı</span> & <span className="underline cursor-pointer">Məxfilik  siyasətimiz</span>i qəbul edirsiniz.</span>
            </div>
            <div className="w-[100%] flex justify-center items-center mt-5">
                <button className="py-4 px-28 bg-[#212D4A] text-xl text-white">Qeydiyyatdan keçin</button>
            </div>
            </div>
        </div>
        </div>
        </div>
}