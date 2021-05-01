import React from "react";
import "../sass/_App.scss";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };
    }

    componentDidMount = () => {
        this.onTermSubmit("dogs");
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render = () => {
        return (
            <div className="app">
                <SearchBar appSubmit={this.onTermSubmit} />
                
                <VideoDetail video={this.state.selectedVideo} />

                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    };
}

export default App;