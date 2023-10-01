import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmar from "./Shimmer";


const Body = () => {
    // Local State variable - Supper powerfull  variable
    const [listOfResaurants, setSate] = useState([]);
    const [filteredResto, setFilteredResto] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
        console.log("useEffect called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "http://localhost:3000/data"
        );
        const json = await data.json();
        setTimeout(function () {
            setSate(json);
            setFilteredResto(json);
        }, 1000)
    }
    console.log("Body Rendered");
    return listOfResaurants.length === 0 ? <Shimmar />
        : (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button className="search-btn"
                            onClick={() => {
                                let filterResto = listOfResaurants.filter((resto) =>
                                    resto.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                                setFilteredResto(filterResto);
                            }}
                        >Search</button>
                    </div>
                    <button className="filter-btn"
                        onClick={() => {
                            let filteredList = listOfResaurants.filter(
                                (res) => res.info.rating.rating_text >= 4);
                            setFilteredResto(filteredList);
                        }}
                    > Top Rated Restaurants </button>

                    <div className="search">
                        <button className="clear-btn"
                            onClick={() => {
                                setFilteredResto(listOfResaurants);
                            }}
                        >Clear Filter</button>
                    </div>
                </div>
                <div className="resto-container">
                    {
                        filteredResto.map((item) => (
                            <RestaurantCard key={item.info.resId} resdata={item} />
                        ))
                    }
                </div>
            </div >
        )
}

export default Body /* default export */