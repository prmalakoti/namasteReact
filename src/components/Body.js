import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmar from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    // Local State variable - Supper powerfull  variable
    const [listOfResaurants, setSate] = useState([]);
    const [filteredResto, setFilteredResto] = useState([]);
    const [searchText, setSearchText] = useState([]);

    const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "http://localhost:3000/data"
        );
        const json = await data.json();
        setSate(json);
        setFilteredResto(json);
        // setTimeout(function () {
        //     setSate(json);
        //     setFilteredResto(json);
        // }, 2000)
    }
    // console.log("Body Rendered", listOfResaurants);
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1 className="align-middle font-bold py-2 px-5">Please check your internet connection...😥</h1>

    const { loggedInUser, setUserInfo } = useContext(UserContext);

    return listOfResaurants.length === 0 ? <Shimmar />
        : (
            <div data-testid="resCard" className="body ml-10 mr-10">
                <div className="filter flex">
                    <div className="search px-2 py-2 m-10 flex">
                        <input type="text" data-testid="searchInput" className="search-box border-1 border-black rounded-md focus-visible:text-left" placeholder="Search what you want" value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                let filterResto = listOfResaurants.filter((resto) =>
                                    resto.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                                )
                                setFilteredResto(filterResto);
                            }}
                        />
                    </div>
                    <button data-testid="rating" className="filter-btn px-2 py-2 m-10 bg-gray-200 flex items-center rounded-lg"
                        onClick={() => {
                            let filteredList = listOfResaurants.filter(
                                (res) => res.info.rating.rating_text >= 4);
                            setFilteredResto(filteredList);
                        }}
                    >Top Rated Restaurants</button>

                    <div className="search px-2 py-2 m-10 bg-gray-200 flex items-center rounded-lg">
                        <button className="clear-btn"
                            onClick={() => {
                                setFilteredResto(listOfResaurants);
                            }}
                        >Clear Filter</button>
                    </div>
                    <div className="px-2 py-2 m-10 flex">
                        <input type="text"
                            className="border-1 border-black rounded-md focus-visible:text-left"
                            placeholder="Enter user name"
                            value={loggedInUser}
                            onChange={(e) => setUserInfo(e.target.value)}
                        />
                    </div>
                </div>
                <div className="resto-container flex flex-wrap">
                    {
                        filteredResto.map((item) => (
                            <Link key={item.info.resId} to={"/restaurant/" + item.info.resId}>
                                {item.isPromoted ? (
                                    <RestaurantCardPromoted resdata={item} />
                                ) : (<RestaurantCard resdata={item} />)}
                            </Link>
                        ))
                    }
                </div>
            </div >
        )
}

export default Body /* default export */