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
            <div className=" w-12/12">
                <div className=" float-left w-5/12 px-10 py-2 ml-10 justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 cursor-pointer">
                    <img className="h-[200px] w-[200px]" src={avatar_url} />
                    <h2> {name} </h2>
                    <h2> {location} </h2>
                    <h3>{bio}</h3>
                    {/* <h2> Name : {this.props.name} </h2> */}
                    {/* <h3> Location: Pune </h3> */}
                    {/* <h4>Contact: prmalakoti@gmail.com </h4> */}
                </div>
                <div className=" float-right w-5/12 px-10 py-2 ml-1 mr-10 justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 cursor-pointer">
                    <img className="h-[200px] w-[300px] rounded-2xl" src="https://zomatoblog.com/wp-content/uploads/2023/09/blog-header.png" />
                    <p>Share your love and gratitude with the kitchen staff of your favorite restaurants you order from with ‘Tips for the kitchen staff’.</p>
                </div>
            </div>
        )
    }
}

export default ProfileClass;