import React from "react";
import "../sass/_VideoList.scss";
import VideoItem from "./VideoItem";

const VideoList = (props) => {

    const rendered_List = props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} /> 
    });

    return (
        <div className="video__list">
            {rendered_List}
        </div>
    )
}

export default VideoList;