import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import pokeAPI from "../api/pokeAPI";

const Pokedex = () => {

    const [term, setTerm] = useState("");
    const [nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    const get_Pokemons = async (url) => {
        setLoading(true);

        const response = await pokeAPI.get(url, {
            params: {
                offset: 0,
                limit: 1100
            }
        });

        console.log(response);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);

        const pokemons_List = await Promise.all(response.data.results.map(async (pokemon_data) => {
            return await axios.get(pokemon_data.url);
        }));

        console.log("pokemon list: ", pokemons_List);
        setPokemons(pokemons_List);

        setTimeout(() => {
            setLoading(false)
        }, 500);
    };

    const next = () => {
        get_Pokemons(nextPage);
    };

    const previous = () => {
        get_Pokemons(previousPage);
    };

    const onSearchTerm = (event) => {
        event.preventDefault();
        setTerm(event.target.value.toLowerCase());
    };

    useEffect(() => {
        console.log("In useState");
        setLoading(true);

        get_Pokemons("/pokemon");

        setLoading(false);
    }, []);

    // useEffect(() => {
    //     const search_Pokemon = async () => {
    //         const response = await pokeAPI.get(`pokemon/${term}`);
    //     };

    //     search_Pokemon();
    // }, [term]);

    const renderPokemons = pokemons.map((pokemon) => {
        
        if (pokemon.data.name.includes(term)) {
            return (
                <li key={pokemon.data.id} className="search__result--item">
                    <Link to={`/${pokemon.data.id}`} className={`search__result--link search__result--link--${pokemon.data.types[0].type.name}`}>
                        <figure className="search__pokemon--figure">
                            <img className="search__pokemon--img" src={pokemon.data.sprites.other["official-artwork"].front_default} alt="pokemon image" />
                        </figure>
    
                        <h2 className="search__pokemon--name">{pokemon.data.name}</h2>
    
                        <div className="search__pokemon--types">
                            {pokemon.data.types.map((type) => {
                                return (
                                    <div key={type.type.url} className={`search__pokemon--type search__pokemon--type--${type.type.name}`}>
                                        {type.type.name}
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </li>
            )
        }
        // } else if (term === "ucbi") {
        //     console.log("In ucbi term");
        //     <li key={pokemon.data.id} className="search__result--item">
        //         <Link to={`/Ucbi`} className={`search__result--link search__result--link--rainbow`}>
        //             <figure className="search__pokemon--figure">
        //                 <img className="search__pokemon--img" src="../../../img/ucbi.jpg" alt="pokemon image" />
        //             </figure>

        //             <h2 className="search__pokemon--name">Ucbi</h2>

        //             <div className="search__pokemon--types">
        //                 <div key="Ucbi1" className={`search__pokemon--type search__pokemon--type--fairy`}>
        //                     That Bitch
        //                 </div>

        //                 <div key="Ucbi2" className={`search__pokemon--type search__pokemon--type--water`}>
        //                     Huneeey
        //                 </div>

        //                 <div key="Ucbi3" className={`search__pokemon--type search__pokemon--type--fighting`}>
        //                     Gamer
        //                 </div>
        //             </div>
        //         </Link>
        //     </li>
        // }
        
    });

    return (
        <div className="search">
            { loading ? (
                <div className="ui active dimmer">
                    <div className="pokeball pokeball-loader"></div>
                </div>
            ) : (
                <div className="search__container">
                {/* Search Box*/}
                    <div className="search__box">
                        <input className="search__input"
                            value={term}
                            onChange={(event) => onSearchTerm(event)}
                            placeholder="Enter your pokemon name" 
                        />
                    </div>
        
                    <div className="search__results__container">
                        <ul className="search__results--list">
                            {renderPokemons}
                        </ul>
        
                        <div className="search__btns">
                            <button className="search__btns--previous" onClick={() => previous()}>previous</button>
                            <button className="search__btns--next" onClick={() => next()}>next</button>
                        </div>
                        {/* <div className="ui active massive centered inline loader"></div> */}
                    </div>
                </div>
            )}
        </div>
    )
};

export default Pokedex;
