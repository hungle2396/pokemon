import React from "react";
import "../sass/VideoItem.scss";

const VideoItem = ({ video, onSelectedVideo }) => {

    return (
        <div onClick={() => onSelectedVideo(video)} className="videoitem__container">
            <div className="videoitem__thumbnail">
                <img src={`${video.snippet.thumbnails.medium.url}`}></img>
            </div>

            <div className="videoitem__content">
                <h2>{video.snippet.title}</h2>
            </div>
        </div>
    );
};

export default VideoItem;