import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDisplay from "./components/VideoDisplay";

import "./sass/App.scss";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    useEffect(() => {
        onTermSubmit("dogs");
    }, []);

    const onTermSubmit = async (term) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                q: term,
                part: "snippet",
                type: "video",
                maxResults: 10,
                key: "AIzaSyANF2m_ny6v4RXYvBuctEzlTBpO525LtUg"
            }
        });

        setVideos(response.data.items);

        // Set the first video as our default video
        setSelectedVideo(response.data.items[0]);
        console.log(videos);
    };

    const onSelectedVideo = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="app__container">
            <SearchBar onTermSubmit={onTermSubmit}/>
            <VideoList videos={videos} onSelectedVideo={onSelectedVideo} />
            <VideoDisplay video={selectedVideo} />
        </div>
    )
};

export default App;