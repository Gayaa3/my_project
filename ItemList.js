
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

    const ItemList = ({data})=>{

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }

    return(
        <div>
            <div>
                {data.map((item) => 
                <div className="m-2 p-2 border-gray-200 border-b-2 flex justify-between" key={item.card.info.id}>
                    <div className="text-left w-9/12">
                        <h1 className="text-base font-semibold">{item.card.info.name}</h1>
                        <h1 className="text-sm">{"💰"} {item.card.info.price/100}</h1>
                        <p className="text-sm mb-5 mt-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <button className="absolute text-xs bg-white text-black rounded-lg font-bold p-2 pl-7 pr-5 mt-24 hover:bg-black hover:text-white"
                        onClick={()=> handleAddItem(item)}>ADD</button>
                        <img alt="" className="rounded-md ml-5 w-36" src={CDN_URL+item.card.info.imageId} />
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default ItemList;