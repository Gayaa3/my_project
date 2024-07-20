
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count:0,
        }
        console.log("Iam Constructor");
    }


    componentDidMount(){
        console.log("Iam ComponentDidMount");
    }


    render(){

        const {name} = this.props;
        const {count} = this.state;
        console.log("Iam Render");

        return(
            <div>
                <div className="text-2xl font-semibold font-mono m-10">
                    <h1>Count = {count}</h1>
                    <button className="bg-black text-white rounded-lg p-2 text-sm"
                    onClick={()=>{
                        this.setState({
                            count : this.state.count + 1
                        })
                    }}
                    >Update</button>
                    <h1>Name : {name}</h1>
                    <h1>Location : Nizampatnam</h1>
                    <h1>Contact : gayathrilanke90@gmail.com</h1>
                </div>
            </div>
        );
    }
}

export default UserClass;