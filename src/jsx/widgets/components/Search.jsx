import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sass/Search.scss";

const Search = () => {

    const [term, setTerm] = useState("rude");
    const [results, setResults] = useState([]);

    // making a request to the wikipidea API
    useEffect(() => {
        // Making an asynchronous function
        const search = async () => {
            const response = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    format: "json",
                    origin: "*",
                    srsearch: term
                }
            });

            setResults(response.data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);
    
            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [term]);


    const renderedResults = results.map((result) => {
        const regex = /(<([^>]+)>)/gi;  //NEW
    	const cleanSnippet = result.snippet.replace(regex, ""); //NEW 

        return (
            <div key={result.pageid} className="search__item">
                <div className="search__content">
                    <h1 className="search__item--title">{result.title}</h1>
                    <p className="search__item--description">{cleanSnippet}</p>
                </div>
                                
                <div className="search__item--link">
                    <a className="search__item--link-1" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">Go</a>
                </div>
            </div>
        );
    })

    const onTermChange = (event) => {
        event.preventDefault();
        setTerm(event.target.value);
    }

    return (
        <div className="search__container">
            <div className="ui form search__form">
                <div className="field search__field">
                    <label className="search__label">Search</label>
                    <input type="text" value={term} className="search__input" onChange={(event) => onTermChange(event)}></input>
                </div>
            </div>

            <div className="search__listing">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;