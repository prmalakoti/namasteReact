import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
import { toast, ToastContainer, Zoom } from "react-toastify";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        toast.error(`Food cart is empty now ☹️`);
    }
    return <div className="text-center m-4, p-4">
        <h1 className="text-2xl">Cart items</h1>
        {
            cartItems.length === 0 ?
                <h1 className="w-6/12 m-auto bg-slate-100 rounded-lg p-4 mt-2">
                    <span>Your cart is empty Please add something🙂</span>
                </h1> :
                <div className="w-12/12 m-auto">
                    <button className="p-2 m-2 bg-black rounded-lg text-white text-sm"
                        onClick={() => { handleClearCart() }}
                    >Clear Cart</button>
                    <CartList items={cartItems}></CartList>
                </div>
        }
        <ToastContainer them='colored' transition={Zoom} autoClose={2000} hideProgressBar={false} position={"top-center"} closeOnClick limit={2}> </ToastContainer>
    </div>
}

export default Cart