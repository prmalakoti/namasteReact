import React from "react";
import ReactDOM from "react-dom/client";
import listOfResto from "./data.json";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantCard
 *      - RestaurantCard
 *          - Img
 * Footer
 *  - Copyright
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://t4.ftcdn.net/jpg/04/50/60/61/360_F_450606123_vTdvXfFZBdfXdcOKuvfMJIHnN05Z5Cft.jpg" />
            </div>
            <div className="nav-item">
                <ul>
                    <li> Home </li>
                    <li> About us </li>
                    <li> Contact us </li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    let { resdata } = props
    let { name, cuisine, image, rating } = resdata?.info ?? "";
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={image.url} />
            <h3> {name} </h3>
            <h4> {cuisine.map((item) => item.name).join(', ')} </h4>
            <h4> {rating.rating_text} </h4>
            <h4> {resdata.order.deliveryTime} </h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
                {
                    listOfResto.map((item) => (
                        <RestaurantCard key={item.info.resId} resdata={item} />
                        // <RestaurantCard key={index} resdata={item} />
                    ))
                }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)