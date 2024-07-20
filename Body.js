
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import { useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"


const Body = ()=>{

const [ListOfRestaurants, setListOfRestaurants] = useState([]);
const [searchText,setSearchText] = useState("");
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
const {loggedInUser, setUserName} = useContext(UserContext);
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

useEffect(()=>{
    fetchData();
},[])

const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


const onlineStatus = useOnlineStatus();
if(onlineStatus === false){
    return(
        <div className="text-center p-10 font-bold text-2xl">
            <h1>Looks like ur Offline</h1>
            <h1>Plase check ur Internet connection..📶</h1>
        </div>
    )
}


// Conditional Rendering..
if(ListOfRestaurants.length === 0){
    return <Shimmer/>
}



return(
        <div className="p-14">
            <div className="flex justify-between">
                <div className="flex">
                    <div>
                        <input type="text" className="border-5 border-black p-2 rounded-lg" value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}/>
                        <button className="bg-black text-white rounded-lg p-2 mb-2 cursor-pointer" 
                        onClick={()=>{
                            const filteredList = ListOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredList);
                        }}>Search</button>
                    </div>
                    <div>
                        <button className="bg-black text-white rounded-lg p-2 ml-3 mb-2 cursor-pointer" 
                        onClick={()=>{
                            const filteredList = ListOfRestaurants.filter((res)=> res.info.avgRating > 4)
                            setFilteredRestaurant(filteredList);
                        }}>Top Rated Restaurant</button>
                    </div>
                </div>
                <div className="">
                    <label className="font-bold text-xl">UserName : </label>
                    <input type="text" className="border-5 border-black p-2 rounded-lg"
                    value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
                </div>
            </div> 
            <div className="flex flex-wrap">
                {filteredRestaurant.map(restaurant => <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                {restaurant.info.sla.lastMileTravel < 5 ? <RestaurantCardPromoted resData = {restaurant} /> : <RestaurantCard resData = {restaurant} />}
                </Link>)}            
            </div>
        </div>
    )
}

export default Body;

// {restaurant.info.sla.lastMileTravel < 5 ? <RestaurantCardPromoted resData = {restaurant} /> : <RestaurantCard resData = {restaurant} />}