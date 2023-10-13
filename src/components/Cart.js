import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        console.log("handleClearCart");
        dispatch(clearCart());
    }
    return <div className="text-center m-4, p-4">
        <h1 className="text-2xl">Cart items</h1>
        {
            cartItems.length === 0 ?
                <h1 className="w-6/12 m-auto bg-slate-100 rounded-lg p-4 mt-2">
                    <span>Your cart is empty Please add something🙂</span>
                </h1> :
                <div className="w-6/12 m-auto">
                    <button className="p-2 m-2 bg-black rounded-lg text-white text-sm"
                        onClick={() => { handleClearCart() }}
                    >Clear Cart</button>
                    <ItemList items={cartItems}></ItemList>
                </div>
        }
    </div>
}

export default Cart