import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
    constructor(props) {
        super(props);
        //console.log("Parent Constucter");
    }

    componentDidMount() {
        //console.log("Parent componentdidmount");
    }
    render() {
        //console.log("Parent render");
        return (
            <div className="w-12/12">
                <h1 className="about-header mt-5 ml-10 px-5 py-2 font-bold">About Food Hunter Developer: </h1>
                <UserContext.Consumer>
                    {(data) => <h1 className="ml-10 about-header px-5 py-2 font-bold"> {data.loggedInUser} </h1>}
                </UserContext.Consumer>
                <ProfileClass name={"Prashant Malakoti (class)"} />
                {/* <Profile name={"Prashant Malakoti (class)"} /> */}
            </div>
        )
    }
}
/*
- Parent Constucter
- Parent render
    - Prashant Malakoti (class1) Childern Constucter
    - Prashant Malakoti (class1) Children render

    - Prashant Malakoti (class2) Childern Constucter
    - Prashant Malakoti (class2) Children render

    - Prashant Malakoti (class1) Child componentdidmount
    - Prashant Malakoti (class2) Child componentdidmount

- Parent componentdidmount

*/
// const About = () => {
//     return (
//         <div>
//             <h1>About Mera Food</h1>
//             {/* <User name={"Prashant Malakoti (function)"} /> */}
//             <UserClass name={"Prashant Malakoti (class)"} />
//         </div>
//     )
// }

export default About;