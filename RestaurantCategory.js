
import ItemList from "./ItemList";

const RestaurantCategory = (props)=>{

    const {data, showItems, setShowIndex} = props;
    const handleClick = ()=>{
        setShowIndex();
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between font-bold mb-3 cursor-pointer"
                onClick={handleClick}
                >
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>🔻</span>
                </div>
                {showItems && <ItemList data={data.itemCards} /> }
            </div>
        </div>
    )
}

export default RestaurantCategory;