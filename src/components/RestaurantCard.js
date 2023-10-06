const RestaurantCard = (props) => {
    let { resdata } = props
    let { name, cuisine, image, rating } = resdata?.info ?? "";
    return (
        <div className="ml-4 mr-5 mb-2 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="res-logo rounded-sm w-[250px] h-[150px]" alt="res-logo" src={image.url} />
            <h3 className="font-bold py-2 text-md"> {name} </h3>
            <h4> {cuisine.map((item) => item.name).join(', ')} </h4>
            <h4 className="font-bold"> ⭐ {rating.rating_text} </h4>
            <h4 className="font-medium"> ⏳{resdata.order.deliveryTime} </h4>
        </div>
    )
}

export default RestaurantCard;