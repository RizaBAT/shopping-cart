import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slices";

export default function CartTile({ cartItem }) {
  const dispacth = useDispatch();
  function handleRemoveFromCart() {
    dispacth(removeFromCart(cartItem.id));
  }
  return (
    <>
      <div className="flex items-center p-5 justify-center bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.tile}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-blue-700 text-white border-2 rounded-lg fond-bold p-4"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
}
