import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return(
        <div>
            <div className="p-10">
                <h1 className="font-bold text-3xl">My Cart🛒</h1>
                <button className="bg-black text-white p-2 text-xs m-3 rounded-se-lg"
                onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-6/12 mx-auto">
                {/** {cartItems.length===0 && <h1 className="text-center font-bold text-2xl">Your Cart is Empty..😓</h1>} */}
                {cartItems.length === 0 ? <h1 className="text-center font-bold text-2xl">Your Cart is Empty..😓</h1> : <ItemList data={cartItems} />}
            </div>
        </div>
    )
}

export default Cart;