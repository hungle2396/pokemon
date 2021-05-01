import React from "react";
import "../sass/_SearchBar.scss";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    OnFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.appSubmit(this.state.term);
    }

    OnInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    render = () => {
        return (
            <div className="search__bar">
                <form onSubmit={this.OnFormSubmit} className="search__bar__form">
                    <label className="search__bar__label">
                        Search Videos:
                    </label>

                    <div className="search__bar__input__container">
                        <input className="search__bar__input" type="text" value={this.state.term} onChange={this.OnInputChange} placeholder="Please enter the videos you want to see"></input>

                        <button className="search__bar__btn" type="submit">Search</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar;