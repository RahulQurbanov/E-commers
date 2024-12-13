import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "./store/categoryProduct";
import { useNavigate } from "react-router";

export default function WishList() {
  const wishlist = useSelector((state) => state.category.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  function navigateProduct() {
    navigate("/product")
  }
  function handleRemove(id) {
    dispatch(removeFromWishlist(id));
  }

  return (
    <div className="bg-[#F4F4F4]">
      <div className="bg-[#F4F4F4] w-[85%] m-auto">
        {wishlist.length === 0 ? (
          <div className="flex justify-center items-center flex-col p-24 gap-5">
            <i className="fa-regular fa-heart cursor-pointer text-[40px] bg-white py-6 px-7 rounded-[999px] text-gray-300 mb-7"></i>
            <p className="text-[#131E38] text-[40px] font-bold">Arzuolunanlar siyahınız boşdur</p>
            <p className="text-[17px]">Məhsulu seçin</p>
            <button
              className="bg-[#131E38] w-[39%] m-auto p-5 text-white text-[17px] font-semibold"
              onClick={navigateProduct}
            >
              MƏHSULLARI GÖSTƏR
            </button>
          </div>
        ) : (
          <div className="p-4 flex gap-10 flex-wrap justify-center">
            {wishlist.map((product) => (
              <div className="flex flex-col">
                <div className="relative">
                <img src={product.image} alt={product.title} className="w-[255px] h-80" />
                <i class="fa-solid fa-trash absolute bottom-5 right-5 text-red-500 text-[20px] cursor-pointer" onClick={() =>handleRemove(product.id)}></i>
                </div>
                <p className="font-bold mt-1 text-lg">{product.title}</p>
                <p className="font-bold">{product.price}AZN</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
