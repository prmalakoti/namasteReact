const Contact = () => {
    return (
        <div className=" place-self-center">
            <div className=" ml-16 align-middle justify-self-center items-center">
                <h1 className="font-bold text-2xl p-2 m-2"> Contact us </h1>
                <form>
                    <input type="text" className="p-2 m-1 mt-3 w-6/12 bg-gray-50 rounded-lg block" placeholder="Enter Name" />
                    <input type="text" className="p-2 m-2 mt-3 w-6/12 bg-gray-50 rounded-lg block" placeholder="Enter Massage" />
                    <input type="email" className="p-2 m-2 mt-3 w-6/12 bg-gray-50 rounded-lg block" placeholder="Enter E-mail" />
                    <button className="p-2 m-2 rounded-lg mt-6 w-6/12 bg-lime-300 font-black block">Send Enquery</button>
                </form>
            </div>
        </div>
    )
}

export default Contact