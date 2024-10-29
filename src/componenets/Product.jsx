export default function Product(){
    return <div className="w-[85%] m-auto grid grid-cols-2 bg-cyan-200">
        <div className="w-[65%] bg-red-500">
           <div className="w-[80%] m-auto">
            <div className="flex items-center justify-between ">
                <p className="text-2xl font-bold">Qiymət</p>
                <p>/</p>
            </div>
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
        <div className="w-[100%] m-auto">
            <div className="flex justify-between">
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