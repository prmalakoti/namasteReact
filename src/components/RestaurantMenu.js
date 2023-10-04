import Shimmar from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const resId = useParams();
    const resInfo = useRestaurantMenu(resId)
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