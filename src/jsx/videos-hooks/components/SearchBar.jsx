import React,{ useState, useEffect } from "react";
import "../sass/SearchBar.scss";

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState("");

    // When the user add or change something in the searchbar
    const onTermChange = (event) => {
        setTerm(event.target.value);
    };

    const onSearchSubmit = (event) => {
        // prevent the browser from freshing
        event.preventDefault();

        // Make sure we call callback from parent component
        onTermSubmit(term);
    };

    return (
        <div className="ui category search search__container">
            <form onSubmit={onSearchSubmit} className="ui icon input">
                <input 
                    className="prompt" 
                    type="text" 
                    placeholder="Search animals..." 
                    value={term}
                    onChange={onTermChange}
                    >
                </input>
                <i className="search icon"></i>
            </form>
        </div>
    );
}

export default SearchBar;