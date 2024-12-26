import { notification } from "antd";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    notification.success({
      message: "Uğurlu əməliyyat",
      description: "Qeydiyyat uğurlu oldu!",
      placement: "topRight",
    });
    
    navigate("/");
  }

  // const isLogged = useSelector(state => state.auth.isLogged);
  const [authEmail,setAuthEmail] = useState();
  const [authPassword,setAuthPassword] = useState();
  const authData = {
    "email":authEmail,
    "password":authPassword
  };
    
  function handleChangeEmail(event){
    setAuthEmail(event.target.value);
  }
  function handleChangePassword(event){
    setAuthPassword(event.target.value);
  }

  return (
    <div className="bg-no-repeat bg-cover flex items-center justify-center font-montserrat">
    <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] m-auto px-6 py-5 my-10 shadow-2xl rounded-lg">
      <div className="flex justify-center items-center text-lg cursor-pointer w-full">
        <p
          className={`${login ? 'text-white bg-cyan-950' : 'text-black bg-white'} py-4 px-6 sm:px-[30px]`}
          onClick={getLogin}
        >
          Daxil olun
        </p>
        <p
          className={`${signUp ? 'text-white bg-cyan-950' : 'text-black bg-white'} py-4 px-6 sm:px-[30px]`}
          onClick={getSignUp}
        >
          Qeydiyyatdan keçin
        </p>
      </div>
  
      {signUp && (
        <div>
          <div className="flex justify-center items-center mt-7">
          </div>
  
          <div className="flex justify-center items-center text-lg cursor-pointer mt-7">
            <p
              className={email ? 'bg-cyan-950 py-4 px-[50px] text-white' : 'text-black bg-white py-4 px-[50px]'}
              onClick={getEmail}
            >
              e-poçt ilə
            </p>
            <p
              className={mybrands ? 'bg-cyan-950 py-4 px-[50px] text-white' : 'text-black bg-white py-4 px-[50px]'}
              onClick={getMyBrands}
            >
              Shopland kartı ilə
            </p>
          </div>
  
          <div className="w-full sm:w-[85%] flex flex-col m-auto gap-5 text-black mt-5">
            {email && (
              <>
                <input
                  type="text"
                  placeholder="Email address"
                  className="p-3 w-full border-2 border-slate-200"
                  value={authEmail}
                  onChange={handleChangeEmail}
                />
                <input
                  type="text"
                  value={'+994' + phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.slice(4))}
                  className="p-3 w-full border-2 border-slate-200"
                />
                <div className="flex gap-5">
                  <input type="text" placeholder="Ad" className="p-3 w-full border-2 border-slate-200" />
                  <input type="text" placeholder="Soyad" className="p-3 w-full border-2 border-slate-200" />
                </div>
                <input
                  type="password"
                  placeholder="Şifrə"
                  className="p-3 w-full border-2 border-slate-200"
                  value={authPassword}
                  onChange={handleChangePassword}
                />
                <input type="password" placeholder="Şifrəni təsdiq edin" className="p-3 w-full border-2 border-slate-200" />
                <div className="flex flex-col gap-1">
                  <p>Doğum tarixi</p>
                  <div className="flex items-center gap-5 w-full">
                    <select className="p-3 w-full border-2 border-slate-200" value={day} onChange={(e) => setDay(e.target.value)}>
                      <option>Gün</option>
                      {days.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <select className="p-3 w-full border-2 border-slate-200" value={month} onChange={(e) => setMonth(e.target.value)}>
                      <option>Ay</option>
                      {months.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <select className="p-3 w-full border-2 border-slate-200" value={year} onChange={(e) => setYear(e.target.value)}>
                      <option>Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
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
              <div className="flex justify-center items-center flex-col w-full m-auto">
                <div className="flex text-xl mt-10">
                  <p
                    className={`${bonusCard ? 'border-b-black' : 'border-b-gray-200'} border-b-2 px-5 cursor-pointer`}
                    onClick={getBonusCard}
                  >
                    BONUS KARTI İLƏ
                  </p>
                  <p
                    className={`${phone ? 'border-b-black' : 'border-b-gray-200'} border-b-2 px-5 cursor-pointer`}
                    onClick={getPhone}
                  >
                    NÖMRƏ İLƏ
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col w-full gap-5 mt-5">
                  <input type="text" placeholder="E-mail ünvanı" className="w-full p-3 border-2 border-slate-200" />
                  <input type="password" placeholder="Şifrə" className="w-full p-3 border-2 border-slate-200" />
                  <input type="password" placeholder="Şifrəni təsdiq edin" className="w-full p-3 border-2 border-slate-200" />
                  {bonusCard && (
                    <input
                      type="text"
                      placeholder="Bonus kartının nömrəsi"
                      className="w-full p-3 border-2 border-slate-200 mb-2"
                    />
                  )}
                  {phone && (
                    <div className="w-full">
                      <input
                        type="text"
                        value={'+994' + phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.slice(4))}
                        className="p-3 w-full border-2 border-slate-200"
                      />
                      <p className="text-sm mt-5">Doğum tarixi</p>
                      <div className="flex items-center gap-5 w-full">
                        <select className="p-3 w-full border-2 border-slate-200" value={day} onChange={(e) => setDay(e.target.value)}>
                          <option>Gün</option>
                          {days.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                        <select className="p-3 w-full border-2 border-slate-200" value={month} onChange={(e) => setMonth(e.target.value)}>
                          <option>Ay</option>
                          {months.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        <select className="p-3 w-full border-2 border-slate-200" value={year} onChange={(e) => setYear(e.target.value)}>
                          <option>Year</option>
                          {years.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
  
            <div className="w-full m-auto">
              <span className="text-[11px]">
                Hesab yaratmaqla bizim{' '}
                <span className="underline cursor-pointer">Şərt və Qaydalarımızı</span> &{' '}
                <span className="underline cursor-pointer">Məxfilik siyasətimiz</span>i qəbul edirsiniz.
              </span>
            </div>
  
            <div className="w-full flex justify-center items-center mt-5">
              <button className="py-3 sm:py-4 px-[80px] sm:px-[104px] bg-[#212D4A] text-xl text-white hover:bg-slate-300 hover:text-black" onClick={getMain}>
                Qeydiyyatdan keçin
              </button>
            </div>
          </div>
        </div>
      )}
  
      {login && (
        <>
          <div className="flex justify-center items-center text-3xl font-bold my-7">
            <h1>E-mail ilə daxil olun</h1>
          </div>
          <div className="w-full sm:w-[75%] flex flex-col m-auto gap-5 mt-7">
            <input
              type="email"
              placeholder="E-mail ünvanı"
              className="p-3 w-full border-2 border-slate-200"
              value={authEmail}
              onChange={handleChangeEmail}
            />
            <input
              type="password"
              placeholder="Şifrə"
              className="p-3 w-full border-2 border-slate-200"
              value={authPassword}
              onChange={handleChangePassword}
            />
            <div className="flex justify-end mt-2">
              <span className="text-sm cursor-pointer">Şifrəni unutmusunuz?</span>
            </div>
  
            <div className="w-full flex justify-center items-center mt-5">
              <button onClick={getMain} className="py-3 sm:py-4 px-[80px] sm:px-[104px] bg-[#212D4A] text-xl text-white hover:bg-slate-300 hover:text-black">
                Daxil ol
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
  
  
  );
}
