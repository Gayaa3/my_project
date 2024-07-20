

const ContactUs = ()=>{
    return(
        <div>
            <div>
                <h1 className="font-bold text-2xl p-5">Contact Us</h1>
                <form className="flex flex-col w-3/12 mx-auto m-10">
                    <input type="text" placeholder="Name" className="border border-black p-1 m-1 rounded-lg"/>
                    <input type="text" placeholder="Contact" className="border border-black p-1 m-1 rounded-lg"/>
                    <button className="bg-black text-white p-1 cursor-pointer m-1 rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;