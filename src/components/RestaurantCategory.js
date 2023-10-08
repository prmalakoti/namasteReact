import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    //const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        //setShowItems(!showItems);
        setShowIndex();
    }
    return (
        <div>
            <div className=" text-center rounded-md w-7/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory