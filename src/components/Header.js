import { useContext, useEffect, useState } from "react";
import { LOGO_URL1 } from "../utils/constants" /* Named import */
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext"
import { useSelector } from "react-redux";
const Header = () => {
    const [state, setState] = useState("Login")
    const checkLoginStatus = () => {
        setState(state === "Login" ? "Logout" : "Login");
    }
    useEffect(() => {
        //console.log("useEffect called");
    }, [])
    const onlineStatus = useOnlineStatus();
    const data = useContext(userContext);
    // console.log("data", data);
    // Subscribibbg the store using selector hook
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        // w-full fixed 
        <div className="flex justify-between rounded-md bg-pink-300 shadow-md sm:bg-gray-500 lg-xl:bg-gray-900">
            <div>
                <h1 className="ml-5 mt-5 mb-5 text-3xl font-bold cursor-pointer italic"> Foodie...</h1>
                {/* <img className="logo ml-2 mb-2 mt-2 w-60 h-16 rounded-xl" src={LOGO_URL1} /> */}
            </div>
            <div className="nav-item">
                <ul className="flex p-15, mt-5 mb-5">
                    <li className="px-2">
                        {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">
                            About us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="grocery">
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="cart">
                            Cart - ({cartItems.length})
                        </Link>
                    </li>
                    <li className="login px-4" onClick={() => checkLoginStatus()}> {state} </li>
                    <li className="px-4 font-semibold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header