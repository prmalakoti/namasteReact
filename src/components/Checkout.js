import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import { UserContextDiscount } from "../utils/UserContext"

const Checkout = () => {
    const { amt } = useParams();
    const totalAmt = Number(amt);
    const { discount } = useContext(UserContextDiscount);
    const dispatch = useDispatch();
    setTimeout(() => {
        dispatch(clearCart());
    }, 1000)
    return (
        <div className=" text-center rounded-md w-7/12 mx-auto my-4 p-4 bg-gray-50 shadow-sm">
            <h1 className=" font-bold"> Congratulations 🎉🎉🎉🎉</h1>
            <h2 className=" font-bold"> You have saved {((totalAmt / 100) * discount).toFixed(2)}</h2>
            <h2 className=" font-bold"> Your Food is Cooking will serve in few minutes</h2>

        </div>
    )
}

export default Checkout;