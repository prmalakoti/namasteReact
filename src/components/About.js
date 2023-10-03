import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

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
            <div>
                <h1 className="about-header">About Mera Food</h1>
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