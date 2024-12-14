import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCard } from "./store/categoryProduct";
import { useNavigate } from "react-router";

export default function AddToCard() {
  const addToCard = useSelector(state => state.category.addcard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return addToCard.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  function handleCard(id) {
    dispatch(removeFromCard(id));
  }

  function navigateProduct() {
    navigate("/product");
  }

  return (
    <div className="bg-[#F4F4F4]">
      <div className="bg-[#F4F4F4] w-[85%] m-auto">
        {addToCard.length === 0 ? (
          <div className="flex justify-center items-center flex-col p-24 gap-5">
            <i className="fa-regular fa-heart cursor-pointer text-[40px] bg-white py-6 px-7 rounded-[999px] text-gray-300 mb-7"></i>
            <p className="text-[#131E38] text-[40px] font-bold">Card siyahınız boşdur</p>
            <p className="text-[17px]">Məhsulu seçin</p>
            <button
              className="bg-[#131E38] w-[39%] m-auto p-5 text-white text-[17px] font-semibold"
              onClick={navigateProduct}
            >
              MƏHSULLARI GÖSTƏR
            </button>
          </div>
        ) : (
          <div className="p-4 flex flex-col gap-10 flex-wrap justify-center">
            {addToCard.map((product) => (
              <div className="flex items-center justify-between" key={product.id}>
                <div className="flex items-center">
                  <div className="relative">
                    <img src={product.image} alt={product.title} className="w-[135px]" />
                    <i
                      className="fa-solid fa-trash absolute bottom-5 right-5 text-red-500 text-[20px] cursor-pointer"
                      onClick={() => handleCard(product.id)}
                    ></i>
                  </div>
                  <div className="flex flex-col ml-5">
                    <p className="font-bold mt-1 text-xl">{product.title}</p>
                    <p className="font-bold text-lg">{product.price} AZN</p>
                  </div>
                </div>
                <div className="flex items-center mr-24">
                  <button
                    className="bg-gray-400 px-[10px] py-1 rounded-full"
                    onClick={() => dispatch(decrement(product.id))}
                  >
                    -
                  </button>
                  <p className="mt-5 ml-5 mr-5 font-bold text-xl">{product.quantity}</p>
                  <button
                    className="bg-gray-400 px-2 py-1 rounded-full"
                    onClick={() => dispatch(increment(product.id))}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
           <div className="flex justify-end items-end">
           <p className="font-bold text-lg text-red-500">Total: {calculateTotal()}</p>
           </div>
          </div>
        )}
      </div>
    </div>
  );
}
