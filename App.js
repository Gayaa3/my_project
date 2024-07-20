
import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));
const AboutUs = lazy(()=> import("./components/AboutUs"));


const App = ()=>{

  const [userName, setUserName] = useState();

  useEffect(()=>{
  const data = {
    name : "Lanke Gaya3"
  };
  setUserName(data.name);
}, [])


  return(
    <Provider store={appStore}>
      <UserContext.Provider value = {{loggedInUser : userName, setUserName}}>
      <div>
        <Header/>
        <Outlet/>
      </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading..</h1>}><AboutUs/></Suspense>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  
  },
  ])

export default appRouter;

