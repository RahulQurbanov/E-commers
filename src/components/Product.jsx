import { useEffect, useState } from "react";

export default function Product() {
  const [displayPrice, setDisplayPrice] = useState(true);
  const [displayCollection, setDisplayCollection] = useState(true);
  const [displayCategory, setDisplayCategory] = useState(true);
  const [displayBrand, setDisplayBrand] = useState(true);
  const [displaySize, setDisplaySize] = useState(true);
  const [displayColor, setDisplayColor] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [productsLength, setProductLength] = useState(0);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const colors = [
    { name: "Göy", hex: "#0000FF" },
    { name: "Yaşıl", hex: "#008000" },
    { name: "Bordo", hex: "#800000" },
    { name: "Mavi", hex: "#00BFFF" },
    { name: "Bej", hex: "#F5F5DC" },
    { name: "Qara / Ağ", hex: "#000000" },
    { name: "Gümüşü", hex: "#C0C0C0" },
    { name: "Multi", hex: "#FFD700" },
    { name: "Ağ", hex: "#FFFFFF" },
    { name: "Xaki", hex: "#BDB76B" },
    { name: "Narıncı", hex: "#FFA500" },
    { name: "Qəhvəyi", hex: "#A52A2A" },
    { name: "Sarı", hex: "#FFFF00" },
    { name: "Tünd yaşıl", hex: "#006400" },
    { name: "Tünd göy", hex: "#00008B" },
    { name: "Qara", hex: "#000000" },
    { name: "Çəhrayı", hex: "#FFC0CB" },
    { name: "Boz", hex: "#808080" },
    { name: "Tünd boz", hex: "#A9A9A9" },
    { name: "Firurəyi", hex: "#8A2BE2" },
  ];

  const sizes = [
    { size: 29 }, { size: 30 }, { size: 36 }, { size: 36.5 }, { size: 37.5 },
    { size: 38 }, { size: 38.5 }, { size: 39 }, { size: 39.5 }, { size: 40 },
    { size: 40.5 }, { size: 41 }, { size: 41.5 }, { size: 42 }, { size: 42.5 },
    { size: 43 }, { size: 44 }, { size: 44.5 }, { size: 45 }, { size: 45.5 },
    { size: 46 }, { size: "S" }, { size: "M" }
  ];
   
  const [getProductData, setGetProductData] = useState([]);
   async function getProduct() {
    let data = await fetch('https://test.mybrands.az/api/v1/products/').then(res => res.json());
    let products = data.results;
    let productsLength = products.length
    console.log(productsLength)
    setGetProductData(products);
    setProductLength(products.length)
    console.log(products)
  }
  useEffect(() => {
   getProduct()
  },[])
  return (
    <div className="w-[91%] m-auto flex justify-between py-10 items-start">
      <div className="w-[45%] flex flex-col gap-[.5px] mt-3">
        <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
          <div
            className="flex items-center justify-between cursor-pointer text-center"
            onClick={() => setDisplayPrice(!displayPrice)}
          >
            <p className="text-xl pt-5">Qiymət</p>
            {displayPrice ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </div>
          <div className={`${displayPrice ? "hidden" : ""}`}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-5">
                <input type="text" placeholder="Min" className="w-full p-4 bg-gray-100" />
                <input type="text" placeholder="Max" className="w-full p-4 bg-gray-100" />
            </div>
               <div className="flex flex-col gap-4 mt-2 pb-5">
               <div className="flex gap-2">
                    <input type="radio" name="1" />
                    <label> 0 - 100 AZN</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="1" />
                    <label> 100 - 200 AZN</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="1" />
                    <label> 200 - 300 AZN</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="1" />
                    <label> <i className="fa-solid fa-angle-right"></i>300 AZN</label>
                </div>
               </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
          <div
            className="flex items-center justify-between cursor-pointer text-center"
            onClick={() => setDisplayCollection(!displayCollection)}
          >
            <p className="text-xl pt-5">Kolleksiyalar</p>
            {displayCollection ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </div>
          <div className={`${displayCollection ? "hidden" : ""}`}>
            <div className="flex flex-col gap-3 pb-5">
                <div className="flex gap-3">
                    <input type="radio" name="1" />
                    <label>FW24</label>
                </div>
                <div className="flex gap-3">
                    <input type="radio" name="1" />
                    <label>SS24</label>
                </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
          <div
            className="flex items-center justify-between cursor-pointer text-center"
            onClick={() => setDisplayCategory(!displayCategory)}
          >
            <p className="text-xl pt-5">Kateqoriylar</p>
            {displayCategory ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </div>
          <div className={`${displayCategory ? "hidden" : ""}`}>
          <div className="flex flex-col gap-3 pb-5">
            <div className="flex gap-3">
                    <input type="radio" name="1" />
                    <label>Qısaboğaz çəkmələr</label>
                </div>
                <div className="flex gap-3">
                    <input type="radio" name="1" />
                    <label>Krossovka/ Kedlər</label>
                </div>
                <div className="flex gap-3">
                    <input type="radio" name="1" />
                    <label>Tərliklər</label>
                </div>
                <div className="flex gap-3">
                    <input type="radio" name="1" />
                    <label>Mokasinlər</label>
                </div>
                <div className="flex gap-3">
                    <input type="radio" name="1" />
                    <label>Tuflilər</label>
                </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
          <div
            className="flex items-center justify-between cursor-pointer text-center"
            onClick={() => setDisplayBrand(!displayBrand)}
          >
            <p className="text-xl pt-5">Brend</p>
            {displayBrand ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </div>
          <div className={`${displayBrand ? "hidden" : ""}`}>
          <div className="flex flex-col gap-3 pb-5">
            <div className="flex gap-3">
                    <input type="checkbox" name="1" />
                    <label>Adidas</label>
                </div>
                <div className="flex gap-3">
                    <input type="checkbox" name="1" />
                    <label>Calvin Klein</label>
                </div>
                <div className="flex gap-3">
                    <input type="checkbox" name="1" />
                    <label>Tommy Hilfiger</label>
                </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
          <div
            className="flex items-center justify-between cursor-pointer text-center"
            onClick={() => setDisplaySize(!displaySize)}
          >
            <p className="text-xl pt-5">Ölçü</p>
            {displaySize ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </div>
          <div className={`${displaySize ? "hidden" : ""}`}>
            <div className="flex flex-col gap-3 pb-5">
              {sizes.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input type="checkbox" />
                  <label>{item.size}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
          <div
            className="flex items-center justify-between cursor-pointer text-center"
            onClick={() => setDisplayColor(!displayColor)}
          >
            <p className="text-xl pt-5">Rəng</p>
            {displayColor ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </div>
          <div className={`${displayColor ? "hidden" : ""}`}>
            <div className="flex flex-col gap-3 pb-5">
              {colors.map((color, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`color-${index}`}
                    onChange={() => handleColorChange(color.hex)}
                    checked={selectedColor === color.hex}
                    className="hidden"
                  />
                  <label
                    htmlFor={`color-${index}`}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span
                      className={`w-6 h-6 rounded-full ${
                        selectedColor === color.hex ? "scale-90" : ""
                      }`}
                      style={{ backgroundColor: color.hex }}
                    ></span>
                    {color.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] text-[15px]">
        <div className="flex  justify-between items-center mb-5">
            <div className="flex gap-3">
                <input type="checkbox"/>
                <label>Endirim</label>
            </div>
            <div className="mt-5">
                <p className="text-gray-300 font-bold">{productsLength} məhsul tapıldı</p>
            </div>
            <div >
                <select className="border-[1px] border-gray-200 py-2 px-3 ">
                    <option>Tarix üzrə</option>
                    <option>Ən çox satılanlar</option>
                    <option>A-dan Z-yə</option>
                    <option>Z-dən A-ya</option>
                    <option>Qiymətlər çoxdan-aza doğru</option>
                    <option>Qiymətlər azdan-çoxa doğru</option>
                </select>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {getProductData &&
           getProductData.map((item, index) =>{
            return <div key={index}>
               <div className="relative overflow-hidden group cursor-pointer">
                <img src={item.image.items[0].file} className="w-[320px] h-[400px] transition-transform duration-700 ease-in-out transform group-hover:scale-110" />
                <i class="fa-regular fa-heart cursor-pointer absolute bottom-5 left-5 text-xl bg-gray-100 py-1 px-2 rounded-[999px] hover:scale-110 hover:shadow-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"></i>
               </div>
               <p className=" text-[15px] mt-5">{item.product.title_az}</p>
               <p className="text-xl font-bold">${item.price}</p>
            </div>
           })
          }
        </div>
      </div>
    </div>
  );
}
