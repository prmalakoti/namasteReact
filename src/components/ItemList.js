import { LOGO_URL, CDN_URL } from "./../utils/constants" /* Named import */
const ItemList = ({ items }) => {
    // console.log("itemCards ", items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-semibold">
                                {item?.card?.info?.name}
                            </span>
                            <span > - ₹ {item?.card?.info?.price / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-0.5 mx-10 my-19 bg-black text-white
                         shadow-lg rounded-lg">Add+</button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList