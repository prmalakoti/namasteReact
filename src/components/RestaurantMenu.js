import { useEffect, useState } from "react"
import Shimmar from "./Shimmer";
import { useParams } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const resId = useParams();
    console.log("tests ", resId);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("http://localhost:3000/resto");
        const json = await data.json();
        setTimeout(function () {
            setResInfo(json[0].data)
        }, 500)
    }
    if (resInfo === null) {
        return (<Shimmar />);
    };

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1> {name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <div className="container-cards">
                {itemCards.map(item =>
                (
                    <div className="ul-list" key={item.card.info.id}>
                        <h3>{item.card.info.name}</h3>
                        Category: {item.card.info.category} <br /> <br />
                        <b> ₹ {item.card.info.price / 100}.00 </b>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default RestaurantMenu