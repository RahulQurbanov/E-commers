import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Login() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const [mybrands, setMyBrands] = useState(false);
  const [phone, setPhone] = useState(true);
  const [bonusCard, setBonusCard] = useState(false)
  const [email, setEmail] = useState(true);
  const [login,setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  function getMyBrands() {
    setMyBrands(true);
    setEmail(false);
  }
  function getEmail() {
    setEmail(true);
    setMyBrands(false);
  }
  function getPhone(){
   setPhone(true);
   setBonusCard(false);
  }
  function getBonusCard(){
    setPhone(false);
    setBonusCard(true);
  }
  function getSignUp(){
    setLogin(false);
    setSignUp(true);
  }
  function getLogin(){
    setSignUp(false);
    setLogin(true);
  }
  const navigate = useNavigate(); 
  function getMain(){
    navigate("/");
  }

  const isLogged = useSelector(state => state.auth.isLogged);
  const [authEmail,setAuthEmail] = useState();
  const [authPassword,setAuthPassword] = useState();
  const authData = {
    "email":authEmail,
    "password":authPassword
  };
console.log(JSON.stringify(authData))
  

  const Login = async() =>{
    const response =await fetch("https://test.mybrands.az/api/v1/auth/login",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(authData)
    }).then(res => res.json())
    
    console.log(response)
  }
  const Logout =() =>{

  }
  
  function handleChangeEmail(event){
    setAuthEmail(event.target.value);
  }
  function handleChangePassword(event){
    setAuthPassword(event.target.value);
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center font-montserrat">
      <div className="w-[40%] m-auto bg-white px-10 py-5 my-10 ">
        <div className="flex justify-center items-center text-lg cursor-pointer w-[100%]">
          <p className={`${login?'text-white bg-cyan-950':'text-black bg-white'} py-4 px-[65px]`} onClick={getLogin}>Daxil olun</p>
          <p className={`${signUp?'text-white bg-cyan-950':'text-black bg-white'} py-4 px-[65px]`} onClick={getSignUp}>Qeydiyyatdan keçin</p>
        </div>
        {signUp &&
        <div>
        <div className="flex justify-center items-center mt-7">
          <h1 className="text-3xl font-bold">Qoşulun</h1>
        </div>
        <div className="flex justify-center items-center text-lg cursor-pointer mt-7">
          <p className={email ? "bg-cyan-950 py-4 px-[62px] text-white" : "text-black bg-white py-4 px-[62px]"} onClick={getEmail}>e-poçt ilə</p>
          <p className={mybrands ? "bg-cyan-950 py-4 px-[62px] text-white" : "text-black bg-white py-4 px-[62px]"} onClick={getMyBrands}>Mybrands kartı ilə</p>
        </div>
        <div className="w-[77%] flex flex-col m-auto gap-5 text-black mt-5">
          {email && (
            <>
              <input type="text" placeholder="Email address" className="p-3 w-[100%] border-2 border-slate-200 bg-red-200" value={authEmail} onChange={handleChangeEmail} />
              <input
                type="text"
                value={"+994" + phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.slice(4))}
                className="p-3 w-[100%] border-2 border-slate-200"
              />
              <div className="flex gap-5">
                <input type="text" placeholder="Ad" className="p-3 w-[100%] border-2 border-slate-200" />
                <input type="text" placeholder="Soyad" className="p-3 w-[100%] border-2 border-slate-200" />
              </div>
              <input type="password" placeholder="Şifrə" className="p-3 w-[100%] border-2 border-slate-200 bg-red-200" value={authPassword} onChange={handleChangePassword} />
              <input type="password" placeholder="Şifrəni təsdiq edin" className="p-3 w-[100%] border-2 border-slate-200" />
              <div className="flex flex-col gap-1">
                <p>Doğum tarixi</p>
                <div className="flex items-center gap-5 w-[100%]">
                  <select className="p-3 w-[100%] border-2 border-slate-200" value={day} onChange={(e) => setDay(e.target.value)}>
                    <option>Gün</option>
                    {days.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <select className="p-3 w-[100%] border-2 border-slate-200" value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option>Ay</option>
                    {months.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <select className="p-3 w-[100%] border-2 border-slate-200" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option>Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <p>Cins</p>
                <div className="flex gap-7">
                  <div className="flex gap-2">
                    <input type="radio" name="gender" />
                    <label>Kişi</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="gender" />
                    <label>Qadın</label>
                  </div>
                </div>
              </div>
            </>
          )}
          {mybrands && (
            <div className="flex justify-center items-center flex-col w-[100%] m-auto">
              <div className="flex text-xl mt-10">
                <p className={`${bonusCard ? "border-b-black" : "border-b-gray-200"} border-b-2 px-5 cursor-pointer`} onClick={getBonusCard}>BONUS KARTI İLƏ</p>
                <p className={`${phone ? "border-b-black" : "border-b-gray-200"} border-b-2 px-5 cursor-pointer`} onClick={getPhone}>NÖMRƏ İLƏ</p>
              </div>
              <div className="flex justify-center items-center flex-col w-[100%] gap-5 mt-5">
                <input type="text" placeholder="E-mail ünvanı" className="w-[100%] p-3 border-2 border-slate-200" />
                <input type="password" placeholder="Şifrə" className="w-[100%] p-3 border-2 border-slate-200" />
                <input type="password" placeholder="Şifrəni təsdiq edin" className="w-[100%] p-3 border-2 border-slate-200" />
                    {bonusCard &&
                      <input type="text" placeholder="Bonus kartının nömrəsi" className="w-[100%] p-3 border-2 border-slate-200 mb-2" />
                    }
                 {phone &&
                 <div className="w-[100%]">
                    <input
                  type="text"
                  value={"+994" + phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.slice(4))}
                  className="p-3 w-[100%] border-2 border-slate-200"
                />
                 <p className="text-sm mt-5">Doğum tarixi</p>
                 <div className="flex items-center gap-5 w-[100%]">
                   <select className="p-3 w-[100%] border-2 border-slate-200" value={day} onChange={(e) => setDay(e.target.value)}>
                     <option>Gün</option>
                     {days.map((d) => (
                       <option key={d} value={d}>{d}</option>
                     ))}
                   </select>
                   <select className="p-3 w-[100%] border-2 border-slate-200" value={month} onChange={(e) => setMonth(e.target.value)}>
                     <option>Ay</option>
                     {months.map((m) => (
                       <option key={m} value={m}>{m}</option>
                     ))}
                   </select>
                   <select className="p-3 w-[100%] border-2 border-slate-200" value={year} onChange={(e) => setYear(e.target.value)}>
                     <option>Year</option>
                     {years.map((y) => (
                       <option key={y} value={y}>{y}</option>
                     ))}
                   </select>
                 </div>
               </div>
                 }
              </div>
            </div>
          )}
          <div className="w-[100%] m-auto">
            <span className="text-[11px]">Hesab yaratmaqla bizim <span className="underline cursor-pointer">Şərt və Qaydalarımızı</span> & <span className="underline cursor-pointer">Məxfilik siyasətimiz</span>i qəbul edirsiniz.</span>
          </div>
          <div className="w-[100%] flex justify-center items-center mt-5">
            <button className="py-4 px-[104px] bg-[#212D4A] text-xl text-white" onClick={isLogged?Logout:Login}>Qeydiyyatdan keçin</button>
          </div>
        </div>
      </div>
        }
        {login &&
         <>
         <div className="flex justify-center items-center text-3xl font-bold my-7">
            <h1>E-mail ilə daxil olun</h1>
        </div>
        <div className="flex flex-col gap-7 ">
            <div className="flex flex-col gap-2">
                <label className="w-[77%] m-auto" >E-mail ünvanı</label>
                <input type="text" placeholder="E-mail" className="p-3 w-[77%] m-auto border-2 border-slate-200"/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="w-[77%] m-auto">Şifrə</label>
                <input type="password" placeholder="Şifrə" className="p-3 w-[77%] border-2 m-auto border-slate-200" />
            </div>
        </div>
        <div className="w-[77%] flex justify-center items-center mt-10 m-auto">
              <button className="py-4 px-[152px] bg-[#212D4A] text-xl text-white" onClick={getMain}>{isLogged?"Logout":"Login"}</button>
        </div>
        <div className="flex justify-center items-center">
            <p className="font-bold text-sm mt-7 cursor-pointer">Şifrənizi unutmusunuz?</p>
        </div>
        <div className="flex items-center justify-center">
            <p className="text-gray-500">_________________________</p>
            <p className="pt-[10px] px-4 text-[15px]">VƏ YA</p>
            <p className="text-gray-500">_________________________</p>
        </div>
        <div className="flex justify-center items-center text-3xl font-bold mt-5 mb-4">
            <p>Daxil olun</p>
        </div>
        <div className="flex justify-center  gap-7 pb-10">
            <div className="cursor-pointer flex gap-2 border-2 border-gray-300 py-0 px-[65px] pt-4">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            <p className="text-lg pt-1">Google</p>
            </div>
            <div className="flex gap-1 border-2 border-gray-300 py-0 px-[65px] cursor-pointer">
            <svg className="pt-[11px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="52px" height="52px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
            <p className="pt-6">Facebook</p>
            </div>
        </div>
         </>
        }
      </div>
    </div>
  );
}
