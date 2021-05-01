import React from "react";
import "../sass/SearchBar.scss";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.appSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    render = () => {
        return (
            <div className="search__Bar">
                <form onSubmit={this.onFormSubmit} className="search__Bar__form">
                    <input type="text" value={this.state.term} onChange={this.onInputChange} className="search__Bar__input"></input>
                    <button className="search__Bar__submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;