import "../sass/main.scss";
import React from "react";
import ReactDOM from "react-dom";

// Take the react component and display it on the screen

// ReactDOM.render(<App/>, document.getElementById("root"));

const getButtonText = () => {
    return "Click on Me!";
}

const App = () => {

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            
            <input id="name" type="text"></input>

            <button style={{backgroundColor: "blue", color: "white"}}>{getButtonText()}</button>
        </div>
    );
};

ReactDOM.render(
    <App/>, 
    document.querySelector("#root")
);