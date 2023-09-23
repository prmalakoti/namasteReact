import React from "react";
import ReactDOM from "react-dom/client";

const Title =() => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
)
let val = 123456;
const HeadingComponent = () =>(
    <div id="container">
        <Title/>
        {val}
        <h1> Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)