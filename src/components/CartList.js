import { useDispatch, useSelector } from "react-redux"
import { useContext } from "react";
import { LOGO_URL, CDN_URL } from "./../utils/constants" /* Named import */
import { addItem } from "../utils/cartSlice"
import { toast, ToastContainer, Zoom } from "react-toastify";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import { UserContextDiscount } from "../utils/UserContext";
const CartList = ({ items }) => {
    const dispatch = useDispatch();
    const handlAddCart = (item) => {
        //Dispatch action
        dispatch(addItem(item));
        toast.success(`${item.card.info.name} Updated Successfully`);
    }
    const { discount } = useContext(UserContextDiscount);
    let totalAmt = 0;

    return (
        <div>
            <ToastContainer them='colored' transition={Zoom} autoClose={2000} hideProgressBar={false} position={"top-center"} closeOnClick limit={2}> </ToastContainer>
            <div className="flex flex-wrap w-8/12 float-left">
                {items.map((item, index) => (
                    totalAmt = totalAmt + item?.card?.info?.price / 100,
                    //setTotalAmtount(totalAmt),
                    <div data-testid="fooditem" key={index}
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
                <UserContextDiscount.Provider value={{ totalAmtount: totalAmt, discount: discount }}>
                    {/* <Checkout></Checkout> */}
                </UserContextDiscount.Provider>
            </div>
            <div className=" w-2/12 flex flex-wrap float-left p-2 m-auto mt-6 border-gray-200 border-b-2 justify-between">
                <div>
                    <div>
                        <span className="float-left"> Total Item: </span>
                    </div>
                    <div>
                        <span className="float-left"> Cart Price : </span>
                    </div>
                    <div>
                        <span className="float-left"> Discount : </span>
                    </div>
                    <div>
                        <span className="float-left"> SGST/CGST : </span>
                    </div>
                    <div>
                        <span className="float-left"> Delivery Charges : </span>
                    </div>
                    <div>
                        <span className="float-left font-semibold"> Final Price : </span>
                    </div>

                </div>
            </div>
            <div className=" w-2/12 flex flex-wrap float-right p-2 m-auto mt-6 border-gray-200 border-b-2 justify-between">
                <div>
                    <div>
                        {items?.length ?? "--"}
                    </div>
                    <div>
                        {totalAmt}/-
                    </div>
                    <div>
                        - {((totalAmt / 100) * discount).toFixed(2)}/-
                    </div>
                    <div>
                        {((totalAmt / 100) * 8).toFixed(2)}/-
                    </div>
                    <div>
                        {((totalAmt / 100) * 10).toFixed(2)}/-
                    </div>

                    <div className=" float-right font-semibold">
                        ₹ {Math.round(((((totalAmt / 100) * 18) + totalAmt)) - ((totalAmt / 100) * discount))}/-
                    </div>

                </div>
            </div>
            <div className="float-center">
                <button className="m-3 p-2 cursor-text w-3/12 font-semibold border-spacing-2 bg-slate-300 rounded-xl"> Waa you have saved {((totalAmt / 100) * discount).toFixed(2)} on your total bill 🎉🎉</button>
                <Link to={"/checkout/" + totalAmt}>
                    <button className="m-1 p-2 w-3/12 font-bold border-spacing-2 bg-teal-400 rounded-xl"> Checkout Now </button>
                </Link>
            </div>

        </div >
    );
}

export default CartList