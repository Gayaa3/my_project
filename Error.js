
import { useRouteError } from "react-router-dom";

const Error = ()=>{

    const err = useRouteError();

    return(
        <div>
            <div className="text-center font-bold m-10">
                <h1 className="text-4xl">An Error Occured...!</h1>
                <h3 className="text-3xl">Don't Worry You Can... Try Again😊</h3>
                <h6 className="text-xl">{err.status} : {err.statusText}</h6>
            </div>
        </div>
    )
}

export default Error;