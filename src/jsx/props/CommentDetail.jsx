// import React from "react";


const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.img}/>
            </a>

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>

                <div className="metadata">
                    <span className="date">{props.dateTime}</span>
                </div>

                <div className="text">Nice blog post! from {props.author}</div>
            </div>
        </div>
    )
}

export default CommentDetail;