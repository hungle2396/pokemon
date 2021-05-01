import React from "react";
import "../sass/_VideoDetail.scss";

const VideoDetail = (props) => {

    if (!props.video) {
        return <div className="video__detail">Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
        <div className="video__detail">

            <iframe title="video title" src={videoSrc} className="video__detail__iframe"></iframe>

            <div className="video__detail__container">
                <h2 className="video__detail__title">
                    {props.video.snippet.title}
                </h2>

                <div className="video__detail__description">
                    description: {props.video.snippet.description}
                </div>
            </div>
            
        </div>
    );
}

export default VideoDetail;