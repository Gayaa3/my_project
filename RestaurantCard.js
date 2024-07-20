
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props)=>{
    // Destructuring Props
    const {resData} = props;
    const {name, cuisines, avgRating, areaName, cloudinaryImageId} = resData?.info;
    return(
        <div>
            <div className="w-56 h-100 p-1 m-1 cursor-pointer hover:p-2">
                <img alt="" className="w-60 rounded-3xl mb-2 h-56" src={CDN_URL+cloudinaryImageId}/>
                <h1 className="font-bold">{name}</h1>
                <h2>{cuisines.join(", ")}</h2>
                <h3>{avgRating+"⭐"} {resData.info.sla.slaString}</h3>
                <h4>{areaName}</h4>
            </div>
            
        </div>
    )
}

// <label>Promoted</label>
// <RestaurantCard/>
export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-xs text-white p-1 rounded-t-md">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;