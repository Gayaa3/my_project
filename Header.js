
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const [btnName,setBtnName] = useState("Log In");
    const onlineStatus = useOnlineStatus();
    const user = useContext(UserContext)
    const cartItems = useSelector((store)=> store.cart.items);

    return(
        <div>
            <div className="p-3 shadow-md flex justify-between">
                <div className="w-24">
                    <img alt="" src={LOGO_URL} />
                </div>
                <div>
                    <ul className="p-7 text-xl cursor-pointer font-serif flex">
                        <li className="m-3">Online Status : {onlineStatus ? "💚" : "❤️"}</li>
                        <li className="m-3 hover:text-orange-600"><Link to="/">Home</Link></li>
                        <li className="m-3 hover:text-orange-600"><Link to="/about">About Us</Link></li>
                        <li className="m-3 hover:text-orange-600"><Link to="/contact">Contact Us</Link></li>
                        <li className="m-3 hover:text-orange-600"><Link to="/grocery">Grocery</Link></li>
                        <li className="m-3 hover:text-orange-600"><Link to="/cart">Cart({cartItems.length})</Link></li>
                        <button className="m-2 bg-orange-500 text-white p-1 rounded-md" 
                        onClick={()=>{
                            btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In");
                        }}>{btnName}</button>
                        <li className="font-bold m-3">{user.loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;