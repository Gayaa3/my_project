
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId)=>{
    // fetchData

    const [restaurantInfo, setRestaurantInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        setRestaurantInfo(json.data);
    }

    return restaurantInfo;
}

export default useRestaurantMenu;