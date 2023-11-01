import { useDispatch, useSelector } from "react-redux"
import { LOGO_URL, CDN_URL } from "./../utils/constants" /* Named import */
import { addItem } from "../utils/cartSlice"
import { toast, ToastContainer, Zoom } from "react-toastify";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    // console.log("itemCards ", items);
    const cartItems = useSelector((store) => store.cart.items);
    const handlAddCart = (item) => {
        //Dispatch action
        dispatch(addItem(item));
        toast.success(`${item.card.info.name} added Successfully`);
    }
    return (
        <div>
            <ToastContainer them='colored' transition={Zoom} autoClose={2000} hideProgressBar={false} position={"top-center"} closeOnClick limit={2}> </ToastContainer>
            {items.map((item) => (
                <div data-testid="fooditem" key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-semibold">
                                {item?.card?.info?.name}
                            </span>
                            <span > - ₹ {item?.card?.info?.price / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-1 mx-10 my-12 bg-slate-500 text-white
                                          shadow-lg rounded-lg" onClick={() => handlAddCart(item)} > Add +</button>
                        </div>
                        <img className=" rounded-xl" src={CDN_URL + item?.card?.info?.imageId} />
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default ItemList