// import "../sass/main.scss";
// import React from "react";
// import ReactDOM from "react-dom";
// import CommentDetail from "./CommentDetail";
// import ApprovalCard from "./ApprovalCard";

// Take the react component and display it on the screen

// ReactDOM.render(<App/>, document.getElementById("root"));

const App = () => {

    return (
        <div className="ui container comments">

            <ApprovalCard>
                <h1>Hello World!</h1>
                <div>How are you?</div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    dateTime="4:00 PM"
                    img={`https://i.pravatar.cc/50?u=${Math.floor(Math.random()*1000)}`}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    dateTime="5:00 PM"
                    img={`https://i.pravatar.cc/50?u=${Math.floor(Math.random()*10)}`}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Jane" 
                    dateTime="1:00 AM" 
                    img={`https://i.pravatar.cc/50?u=${Math.floor(Math.random()*100000)}`}
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(
    <App/>, 
    document.querySelector("#root")
);