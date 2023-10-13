import { useDispatch, useSelector } from "react-redux"
import { LOGO_URL, CDN_URL } from "./../utils/constants" /* Named import */
import { addItem } from "../utils/cartSlice"

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    // console.log("itemCards ", items);
    const cartItems = useSelector((store) => store.cart.items);
    const handlAddCart = (item) => {
        //Dispatch action
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
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
                                         shadow-lg rounded-lg" onClick={() => handlAddCart(item)} >Add+</button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} />
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default ItemList