import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmar from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    // Local State variable - Supper powerfull  variable
    const [listOfResaurants, setSate] = useState([]);
    const [filteredResto, setFilteredResto] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
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
        }, 2000)
    }
    console.log("Body Rendered");
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1 className="align-middle font-bold py-2 px-5">Please check your internet connection...😥</h1>
    return listOfResaurants.length === 0 ? <Shimmar />
        : (
            <div className="body">
                <div className="filter flex">
                    <div className="search px-2 py-2 m-10 flex">
                        <input type="text" className="search-box border-1 border-black rounded-md focus-visible:text-left" placeholder="Search what you want" value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                let filterResto = listOfResaurants.filter((resto) =>
                                    resto.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                                )
                                setFilteredResto(filterResto);
                            }}
                        />
                    </div>
                    <button className="filter-btn px-2 py-2 m-10 bg-gray-200 flex items-center rounded-lg"
                        onClick={() => {
                            let filteredList = listOfResaurants.filter(
                                (res) => res.info.rating.rating_text >= 4);
                            setFilteredResto(filteredList);
                        }}
                    > Top Rated Restaurants </button>

                    <div className="search px-2 py-2 m-10 bg-gray-200 flex items-center rounded-lg">
                        <button className="clear-btn"
                            onClick={() => {
                                setFilteredResto(listOfResaurants);
                            }}
                        >Clear Filter</button>
                    </div>
                </div>
                <div className="resto-container flex flex-wrap">
                    {
                        filteredResto.map((item) => (
                            <Link key={item.info.resId} to={"/restaurant/" + item.info.resId}>
                                <RestaurantCard resdata={item} />
                            </Link>
                        ))
                    }
                </div>
            </div >
        )
}

export default Body /* default export */