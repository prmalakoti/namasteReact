import ShimmarList from "./ShimmerList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    const resId = useParams();
    const resInfo = useRestaurantMenu(resId)
    const [showIndex, setShowIndex] = useState(0)

    if (resInfo === null) {
        return (<ShimmarList />);
    };

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl"> {name} </h1>
            <p className="font-semibold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* category accordions */}
            {category.map((category, index) =>
                // controlled comopnent
                <RestaurantCategory
                    key={index} data={category?.card?.card}
                    showItems={index === showIndex && true}
                    setShowIndex={() => setShowIndex(index)}
                />
            )}
        </div>
        // <div className="m-4 p-4">
        //     <h1 className="font-bold"> {name}</h1>
        //     <p className="font-semibold ml-5">
        //         {cuisines.join(", ")} - {costForTwoMessage}
        //     </p>
        //     <div className="flex flex-wrap">
        //         {itemCards.map(item =>
        //         (
        //             <div className="m-4 p-4 w-[250px] h-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" key={item.card.info.id}>
        //                 <h3>{item.card.info.name}</h3>
        //                 Category: {item.card.info.category} <br /> <br />
        //                 <b> ₹ {item.card.info.price / 100}.00 </b>
        //             </div>
        //         )
        //         )}
        //     </div>
        // </div>
    )
}

export default RestaurantMenu