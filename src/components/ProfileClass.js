import React from "react"
class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "default",
                location: "default",
                bio: "Bio",
                avatar_url: "avatar_url"
            }
        }
        console.log(this.props.name, "Childern Constucter");
    }
    async componentDidMount() {
        console.log(this.props.name, "Child componentdidmount");
        const data = await fetch("https://api.github.com/users/prmalakoti");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: json
        })
        this.timer = setInterval(() => {
            console.log("setInterval...");
        }, 1000);
    }
    componentDidUpdate() {
        console.log("componentDidUpdated");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer);
    }
    render() {
        console.log(this.props.name, "Children render");
        const { name, location, bio, avatar_url } = this.state.userInfo
        return (
            <div className="user-card">
                <img style={{ height: "150px", width: "150px" }} src={avatar_url} />
                <h2> {name} </h2>
                <h2> {location} </h2>
                <h3>{bio}</h3>
                {/* <h2> Name : {this.props.name} </h2> */}
                {/* <h3> Location: Pune </h3> */}
                {/* <h4>Contact: prmalakoti@gmail.com </h4> */}
            </div>
        )
    }
}

export default ProfileClass;