import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []); /* empty [] means call only once */

    const fetchMenu = async () => {
        const data = await fetch("http://localhost:3000/resto");
        const json = await data.json();
        setTimeout(function () {
            setResInfo(json[0].data)
        }, 500)
    }
    return resInfo;
}
export default useRestaurantMenu;