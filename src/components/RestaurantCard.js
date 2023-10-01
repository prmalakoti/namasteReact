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

export default RestaurantCard;