
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{

    // const [restaurantInfo, setRestaurantInfo] = useState(null)

    const {resId} = useParams();
    const restaurantInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    /*useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId)
        const json = await data.json();
        setRestaurantInfo(json.data)
    }*/

    if(restaurantInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;
    // const itemCards = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    return(
        <div>
            <div className="p-10">
                <h1 className="text-3xl font-bold">{name}</h1>
                <h3 className="">{"⭐"+cuisines.join(", ")} - {costForTwoMessage}</h3>
            </div>
            <div className="text-center">
                {categories.map((category, index)=> <RestaurantCategory key={category?.card?.card.title} 
                data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=> setShowIndex(index)}/>)}
            </div>
        </div>
    )
}

export default RestaurantMenu;