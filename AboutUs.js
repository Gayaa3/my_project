
// import User from "./User";
import UserClass from "./UserClass";

// <User name={"Lanke Gayathri (function)"}/>

const AboutUs = ()=>{
    return(
        <div>
            <div className="flex p-20 ">
                <div>
                    <img alt="" className="w-48" src="https://rukminim2.flixcart.com/image/850/1000/l1mh7rk0/poster/b/s/j/medium-famous-cartoon-poster-for-kids-shinchan-cartoon-wall-original-imagd5fcasqbqfcg.jpeg?q=90&crop=false"/>
                </div>
                <UserClass name={"Lanke Gayathri (class)"}/>
            </div>
        </div>
    )
}

export default AboutUs;