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
        <div className="header">
            <div>
                <h1 className="app-name"> Mera Food 😋 </h1>
                {/* <img className="logo" src={LOGO_URL} /> */}
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                        {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link to="grocery">
                            Grocery
                        </Link>
                    </li>
                    <li> Cart </li>
                    <li className="login" onClick={() => checkLoginStatus()}> {state} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header