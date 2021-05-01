import React from "react";
import "../sass/_VideoItem.scss";

const VideoItem = (props) => {
    const video = props.video.snippet;
    return (
        <div onClick={() => props.onVideoSelect(props.video)} className="video__item">
            
            <img alt={video.title} src={video.thumbnails.medium.url} className="video__item__img"></img>
            <h3 className="video__item__title">{video.title}</h3>
        </div>
    );
}

export default VideoItem;