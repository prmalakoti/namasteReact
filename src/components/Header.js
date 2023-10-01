import { useState } from "react";
import { LOGO_URL } from "../utils/constants" /* Named import */
const Header = () => {
    const [state, setState] = useState("Login")
    const checkLoginStatus = () => {
        setState(state === "Login" ? "Logout" : "Login");
    }
    return (
        <div className="header">
            <div>
                <h1 className="app-name"> Mera Food </h1>
                {/* <img className="logo" src={LOGO_URL} /> */}
            </div>
            <div className="nav-item">
                <ul>
                    <li> Home </li>
                    <li> About us </li>
                    <li> Contact us </li>
                    <li> Cart </li>
                    <li className="login" onClick={() => checkLoginStatus()}> {state} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header