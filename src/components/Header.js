import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants" /* Named import */
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [state, setState] = useState("Login")
    const checkLoginStatus = () => {
        setState(state === "Login" ? "Logout" : "Login");
    }
    useEffect(() => {
        //console.log("useEffect called");
    }, [])
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-300 shadow-md sm:bg-gray-500 lg-xl:bg-gray-900">
            <div>
                <h1 className="ml-5 mt-5 mb-5 text-2xl font-extrabold cursor-pointer"> Food Hunter 😋 </h1>
                {/* <img className="logo" src={LOGO_URL} /> */}
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
                    <li className="px-4"> Cart </li>
                    <li className="login px-4" onClick={() => checkLoginStatus()}> {state} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header