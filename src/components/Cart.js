import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white"
          onClick={handleClearCart}
          disabled={cartItems?.length === 0}
          data-testid="clearCartBtn"
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1>Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} isAddButtonDisplay={false}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
