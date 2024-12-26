import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCard } from "./store/categoryProduct";
import { useNavigate } from "react-router-dom";

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

  function navigateMain() {
    navigate("/");
  }

  return (
    <div className="bg-[#F4F4F4]">
  <div className="bg-[#F4F4F4] w-[85%] m-auto">
    {addToCard.length === 0 ? (
      <div className="flex justify-center items-center flex-col p-10 gap-5 sm:p-16 md:p-24">
        <i className="fa-solid fa-cart-shopping cursor-pointer text-[40px] bg-white py-6 px-7 rounded-[999px] text-gray-300 mb-7"></i>
        <p className="text-[#131E38] text-[16px] sm:text-[32px] md:text-[40px] font-bold">Card siyahınız boşdur</p>
        <p className="text-[15px] sm:text-[16px] md:text-[17px]">Məhsulu seçin</p>
        <button
          className="bg-[#131E38] min-w-[250px] sm:w-[39%] p-[1rem] text-white text-[13px] lg:text- font-semibold"
          onClick={navigateMain}
        >
          Ana səhifəyə keçin
        </button>
      </div>
    ) : (
      <div className="p-4 flex flex-col gap-6 sm:gap-8 md:gap-10 flex-wrap justify-center">
        {addToCard.map((product) => (
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4 sm:gap-6" key={product.id}>
            <div className="flex items-center w-full sm:w-auto">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-[120px] sm:w-[135px]" />
                <i
                  className="fa-solid fa-trash absolute bottom-5 right-5 text-red-500 text-[18px] sm:text-[20px] cursor-pointer"
                  onClick={() => handleCard(product.id)}
                ></i>
              </div>
              <div className="flex flex-col ml-4 sm:ml-5">
                <p className="font-bold mt-1 text-[16px] sm:text-xl">{product.title}</p>
                <p className="font-bold text-[15px] sm:text-lg">{product.price} AZN</p>
              </div>
            </div>
            <div className="flex items-center mt-4 sm:mt-0 sm:mr-16 md:mr-24 gap-3">
              <button
                className="bg-gray-400 px-[8px] py-1 rounded-full text-white"
                onClick={() => dispatch(decrement(product.id))}
              >
                -
              </button>
              <p className="mt-2 sm:mt-5 ml-3 mr-3 font-bold text-[16px] sm:text-xl">{product.quantity}</p>
              <button
                className="bg-gray-400 px-2 py-1 rounded-full text-white"
                onClick={() => dispatch(increment(product.id))}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-5 sm:mt-8">
          <p className="font-bold text-lg sm:text-xl text-red-500">Total: {calculateTotal()}</p>
        </div>
      </div>
    )}
  </div>
</div>

  );
}
