import { useState } from "react"

export default function Product(){
    const [displayHidden ,setDisplayHidden] = useState(true);
      const [selectedColor, setSelectedColor] = useState(null);

    function getDisplayHidden(){
        setDisplayHidden(!displayHidden);
    }
    function getDisplayHiddenCollegia(){
        setDisplayHidden(!displayHidden);
    }
    function getDisplayHiddenCateqory(){
        setDisplayHidden(!displayHidden);
    }
    function getDisplayHiddenBrend(){
        setDisplayHidden(!displayHidden);
    }
    function getDisplayHiddenSize(){
        setDisplayHidden(!displayHidden);
    }
    function getDisplayHiddenColor(){
        setDisplayHidden(!displayHidden);
    }

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

    return <div className="w-[85%] m-auto grid grid-cols-2 place-content-start py-10">
        <div className="w-[58%] flex flex-col gap-[.5px]">
           <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
            <div className="flex items-center justify-between cursor-pointer text-center " onClick={getDisplayHidden}>
                <p className="text-xl  pt-5">Qiymət</p>
                {displayHidden ? (<i className="fa-solid fa-angle-down"></i>) : (<i className="fa-solid fa-angle-up"></i>)}
           </div>
           <div className={`${displayHidden ? "hidden" : ""}`}>
            <div className="flex items-center gap-5 mb-5">
                <input type="text" placeholder="Min" className="w-[35%] py-2 px-4 bg-gray-100" />
                <input type="text" placeholder="Max" className="w-[35%] py-2 px-4 bg-gray-100"/>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <input type="radio" name="1" />
                    <label>0 - 100 AZN</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>100 - 200 AZN</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>200 - 300 AZN</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>300 AZN</label>
                </div>
            </div>
           </div>
           </div>
           <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
            <div className="flex items-center justify-between cursor-pointer text-center " onClick={getDisplayHiddenCollegia}>
                <p className="text-xl  pt-5">Kolleksiyalar</p>
                {displayHidden ? (<i className="fa-solid fa-angle-down"></i>) : (<i className="fa-solid fa-angle-up"></i>)}
           </div>
           <div className={`${displayHidden ? "hidden" : ""}`}>
            <div className="flex items-center gap-5 mb-5">
                <input type="text" placeholder="Min" className="w-[35%] py-2 px-4 bg-gray-100" />
                <input type="text" placeholder="Max" className="w-[35%] py-2 px-4 bg-gray-100"/>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <input type="radio" name="1" />
                    <label>FW24</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>SS24</label>
                </div>
            </div>
           </div>
           </div>
           <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
            <div className="flex items-center justify-between cursor-pointer text-center " onClick={getDisplayHiddenCateqory}>
                <p className="text-xl  pt-5">Kateqoriylar</p>
                {displayHidden ? (<i className="fa-solid fa-angle-down"></i>) : (<i className="fa-solid fa-angle-up"></i>)}
           </div>
           <div className={`${displayHidden ? "hidden" : ""}`}>
            <div className="flex items-center gap-5 mb-5">
                <input type="text" placeholder="Min" className="w-[35%] py-2 px-4 bg-gray-100" />
                <input type="text" placeholder="Max" className="w-[35%] py-2 px-4 bg-gray-100"/>
            </div>
            <div className="flex flex-col gap-2">
            <div>
                    <input type="radio" name="1" />
                    <label>Qısaboğaz çəkmələr</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>Krossovka/ Kedlər</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>Tərliklər</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>Mokasinlər</label>
                </div>
                <div>
                    <input type="radio" name="1" />
                    <label>Tuflilər</label>
                </div>
            </div>
           </div>
           </div>
           <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
            <div className="flex items-center justify-between cursor-pointer text-center " onClick={getDisplayHidden}>
                <p className="text-xl  pt-5">Brend</p>
                {displayHidden ? (<i className="fa-solid fa-angle-down"></i>) : (<i className="fa-solid fa-angle-up"></i>)}
           </div>
           <div className={`${displayHidden ? "hidden" : ""}`}>
            <div className="flex items-center gap-5 mb-5">
                <input type="text" placeholder="Min" className="w-[35%] py-2 px-4 bg-gray-100" />
                <input type="text" placeholder="Max" className="w-[35%] py-2 px-4 bg-gray-100"/>
            </div>
            <div className="flex flex-col gap-2">
            <div>
                    <input type="checkbox" name="1" />
                    <label>Adidas</label>
                </div>
                <div>
                    <input type="checkbox" name="1" />
                    <label>Calvin Klein</label>
                </div>
                <div>
                    <input type="checkbox" name="1" />
                    <label>Tommy Hilfiger</label>
                </div>
            </div>
           </div>
           </div>
           <div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
    <div className="flex items-center justify-between cursor-pointer text-center" onClick={getDisplayHiddenSize}>
        <p className="text-xl pt-5">Ölçü</p>
        {displayHidden ? (<i className="fa-solid fa-angle-down"></i>) : (<i className="fa-solid fa-angle-up"></i>)}
    </div>
    <div className={`${displayHidden ? "hidden" : ""}`}>
        <div className="flex items-center gap-5 mb-5">
            <input type="text" placeholder="Min" className="w-[35%] py-2 px-4 bg-gray-100" />
            <input type="text" placeholder="Max" className="w-[35%] py-2 px-4 bg-gray-100" />
        </div>
        <div className="flex flex-col gap-2">
            {/* Add size options */}
            <div>
                <input type="checkbox" name="size" value="29" id="size29" />
                <label htmlFor="size29">29</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="30" id="size30" />
                <label htmlFor="size30">30</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="36" id="size36" />
                <label htmlFor="size36">36</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="36.5" id="size36_5" />
                <label htmlFor="size36_5">36.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="37.5" id="size37_5" />
                <label htmlFor="size37_5">37.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="38" id="size38" />
                <label htmlFor="size38">38</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="38.5" id="size38_5" />
                <label htmlFor="size38_5">38.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="39" id="size39" />
                <label htmlFor="size39">39</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="40" id="size40" />
                <label htmlFor="size40">40</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="40.5" id="size40_5" />
                <label htmlFor="size40_5">40.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="41" id="size41" />
                <label htmlFor="size41">41</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="41.5" id="size41_5" />
                <label htmlFor="size41_5">41.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="42" id="size42" />
                <label htmlFor="size42">42</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="42.5" id="size42_5" />
                <label htmlFor="size42_5">42.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="43" id="size43" />
                <label htmlFor="size43">43</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="43.5" id="size43_5" />
                <label htmlFor="size43_5">43.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="44" id="size44" />
                <label htmlFor="size44">44</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="44.5" id="size44_5" />
                <label htmlFor="size44_5">44.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="45" id="size45" />
                <label htmlFor="size45">45</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="45.5" id="size45_5" />
                <label htmlFor="size45_5">45.5</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="46" id="size46" />
                <label htmlFor="size46">46</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="S" id="sizeS" />
                <label htmlFor="sizeS">S</label>
            </div>
            <div>
                <input type="checkbox" name="size" value="M" id="sizeM" />
                <label htmlFor="sizeM">M</label>
            </div>
        </div>
    </div>
</div>

<div className="w-[80%] m-auto border-[1px] border-gray-200 px-5">
      <div
        className="flex items-center justify-between cursor-pointer text-center"
        onClick={() => setDisplayHidden(!displayHidden)}
      >
        <p className="text-xl pt-5">Rəng</p>
        {displayHidden ? (
          <i className="fa-solid fa-angle-down"></i>
        ) : (
          <i className="fa-solid fa-angle-up"></i>
        )}
      </div>
      <div className={`${displayHidden ? "hidden" : ""}`}>
        <div className="flex flex-col gap-2">
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

        <div className="w-[100%] ">
            <div className="flex justify-between items-start text-start">
                <div>
                    <input type="checkbox" />
                    <label>Endirim</label>
                </div>
                <div>
                    <p>433 məhsul tapıldı</p>
                </div>
                <div>
                    <form>
                    <select>
                        <option>Tarix üzrə</option>
                        <option>Ən çox satılanlar</option>
                        <option>A-dan Z-yə</option>
                        <option>Z-dən A-ya</option>
                        <option>Qiymətlər çoxdan-aza doğru</option>
                        <option>Qiymətlər azdan-çoxa doğru</option>
                    </select>
                    </form>
                </div>
            </div>
        </div>
    </div>
}