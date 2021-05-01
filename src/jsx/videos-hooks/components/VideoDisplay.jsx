import React from "react";
import "../sass/VideoDisplay.scss";

const VideoDisplay = ({ video }) => {
    console.log(video);
    if (!video) {
        return <div>Loading...</div>
    }
    
    return (
        <div className="videodisplay__container">
            <div className="videodisplay__video">
                <iframe className="videodisplay__iframe" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
            </div>

            <div className="videodisplay__content">
                <h1 className="videodisplay__title">{video.snippet.title}</h1>
                <p className="videodisplay__description">{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDisplay;