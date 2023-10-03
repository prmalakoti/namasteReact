import { useEffect, useState } from "react"

const Profile = (props) => {
    const [state, setSate] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("setInterval useEffect");
        }, 1000);
        return () => { /* componentwillUnmount */
            clearInterval(timer);
        }
    })
    return (
        <div className="user-card">
            <h2>Count = {state} </h2>
            <h2> Name : {props.name} </h2>
            <h3> Location: Pune </h3>
            <h4>Contact: prmalakoti@gmail.com </h4>
        </div>
    )
}

export default Profile