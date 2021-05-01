import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {

    /* user search input */
    const [term, setTerm] = useState("");
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    const [nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");
    const [loading, setLoading] = useState(false);
    
    const initialUrl = "https://pokeapi.co/api/v2/pokemon?";
    
    const onTermChange = (event) => {
        setTerm(event.target.value);
    }

    const getPokemons = async (url) => {
        const result = await axios.get(url, {
            params: {
                offset: 0,
                limit: 6
            }
        });

        return result;
    }
    
    const loading_Pokemons = async (pokemons) => {
        const pokemons_List = await Promise.all(pokemons.map(async (pokemon_data) => {
            return await axios.get(pokemon_data.url);
        }));

        setAllPokemons(pokemons_List);
    };

    const next = async () => {
        setLoading(true);

        let response = await getPokemons(nextPage);
        loading_Pokemons(response.data.results);

        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
        
        setLoading(false);
    }

    const previous = async () => {

        if (!previousPage) {
            return;
        }

        setLoading(true);
        let response = await getPokemons(previousPage);
        loading_Pokemons(response.data.results);

        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);

        setLoading(false);
    }

    useEffect(() => {

        const get_Pokemon = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);

            const pokemon_data = [];

            pokemon_data.push(response);

            setAllPokemons(pokemon_data);
        };

        get_Pokemon();

    }, [term]);

    /* load pokemons */
    useEffect(() => {
        /* async function to fetch from api */
        const get_Pokemons = async () => {
            /* send the get http request and wait for the response*/
            const response = await getPokemons(initialUrl);

            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);

            loading_Pokemons(response.data.results); 
        };

        /* immediately invoke the get_data async function */
        get_Pokemons();
    }, []);


    const renderPokemons = pokemon.map((pokemon) => {

        console.log(pokemon);
        return (
            <li key={pokemon.data.id} className={`search__result--item search__result--item--${pokemon.data.types[0].type.name}`}>
                <figure className="search__pokemon--figure">
                    <img className="search__pokemon--img" src={pokemon.data.sprites.other.dream_world.front_default} alt="pokemon image" />
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
            </li>
        )
    });

    return (
        <div className="search__container">
            {/* Search Box*/}
            <div className="search__box">
                <input className="search__input"
                    onChange={(event) => onTermChange(event)}
                    value={term}
                    placeholder="Enter a color to find pokemon" 
                />
            </div>

            <div className="search__results__container">
                <ul className="search__results--list">
                    {renderPokemons}
                </ul>
            </div>

            <div className="search__btns">
                <button className="search__btns--previous" onClick={() => previous()}>previous</button>
                <button className="search__btns--next" onClick={() => next()}>next</button>
            </div>
        </div>
    );
};

export default Search;