const RestaurantCard = (props) => {
    let { resdata } = props
    let { name, cuisine, image, rating } = resdata?.info ?? "";
    return (
        <div className="ml-4 mr-5 mb-2 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="res-logo rounded-sm w-[250px] h-[150px]" alt="res-logo" src={image.url} />
            <h3 className="font-bold py-2 text-md"> {name} </h3>
            <h4> {cuisine.map((item) => item.name).join(', ')} </h4>
            <h4 className="font-bolb"> ⭐ {rating.rating_text} </h4>
            <h4 className="font-medium"> ⏳{resdata.order.deliveryTime} </h4>
        </div>
    )
}
// Higher order component
// input - RestaurantCard => output - RestaurantCardPromoted

export const withPromotedLable = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white ml-4 mt-2 p-1 rounded-md">Promoted</label>
                {/* <label className=" bottom-12 bg-black text-white mb-1 ml-5 p-1 rounded-md">Promoted</label> */}
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;