import React from "react";
import VideoItem from "./VideoItem";

import "../sass/VideoList.scss";

const VideoList = ({ videos, onSelectedVideo }) => {

    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onSelectedVideo={onSelectedVideo} video={video} />
    });

    return (
        <div className="videolist__container">
            {renderedVideos}
        </div>
    );
}

export default VideoList;