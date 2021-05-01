import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

import "../sass/App.scss";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { images: [] };
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        });

        this.setState({
            images: response.data.results
        });
    }

    render = () => {
        return (
            <div className="App">
                <SearchBar appSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images

                <ImageList images={this.state.images} />
            </div>
        );
    }
        
};

export default App;