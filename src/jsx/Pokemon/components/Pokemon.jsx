import React, { useState, useEffect } from "react";
import {
    useParams,
    Link,
    Redirect
} from "react-router-dom";
import axios from "axios";

import pokeAPI from "../api/pokeAPI";
import * as Helper from "../logic/Helper";

const Pokemon = () => {
    const { pokemonId } = useParams();
    const [pokemonsData, setPokemonsData] = useState({});
    const [loading, setLoading] = useState(false);
    const [displayCard, setDisplayCard] = useState(0);

    useEffect(() => {

        const get_Pokemon = async () => {
            setLoading(true);

            try {
                const pokemon_data = await pokeAPI.get(`pokemon-species/${pokemonId}`);
                const pokemon_Evolution = await pokeAPI.get(pokemon_data.data.evolution_chain.url);
                const data = await Helper.check_Evolution(pokemon_Evolution);
                console.log(data);
                setPokemonsData(data);
            } catch(error) {
                alert("This Pokemon cannot be found at the moment :C")
            }
             
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        
        get_Pokemon();

    }, [pokemonId]);

    const render_Pokemons = () => {
        let pokemons_data = [];
        for (let i = 0; i < pokemonsData.length; i++) {
            let display = "block";

            if (displayCard === i) {
                display = "active";
            }

            pokemons_data[i] = (
                <div key={pokemonsData[i].id} className={`pokemon__card__container pokemon__card__container--${display}--${pokemonsData[i].types[0]}`}>
                    <h1 className={`pokemon__id--${display}`}># {pokemonsData[i].id}</h1>
                    <h1 className={`pokemon__stage--${display}`}>Stage {i + 1}</h1>
                    <figure className="pokemon__figure" onClick={() => setDisplayCard(i)}>
                        <img className="pokemon__img" src={pokemonsData[i].img} />
                    </figure>

                    <h1 className={`pokemon__name--${display}`}>{pokemonsData[i].name}</h1>
                    
                    <div className={`pokemon__card--types--${display} margin__bottom--medium`}>
                        {pokemonsData[i].types ? (
                            pokemonsData[i].types.map((type) => {
                                return (
                                    <div key={type} className={`search__pokemon--type search__pokemon--type--${type}`}>
                                        {type}
                                    </div>
                                )
                            })
                        ) : (
                            <div>
                                loading!
                            </div>           
                        )}
                    </div>

                    <h2 className={`header__secondary pokemon__description--${display}`}>Height: {pokemonsData[i].height} M</h2>
                    <h2 className={`header__secondary pokemon__description--${display}`}>Weight: {pokemonsData[i].weight} Kg</h2>
                    <h2 className={`header__secondary pokemon__description--${display}`}>Color: {pokemonsData[i].color} </h2>
                    <p className={`header__secondary pokemon__description--${display}`}>Description: {pokemonsData[i].description}</p>
                </div>
            )
        }

        return pokemons_data;
    };

    return (
        <div className="pokemons__container">
            <div className="pokemon">
                {!loading ? (
                    <>
                        <div className="btn__container">
                            <Link to="/" className="btn">Back to Pokedex</Link>
                        </div> 
                        <div className="pokemon__container">
                            {render_Pokemons()}
                        </div>
                    </>
                    
                ) : (
                    <div className="wrapper">
                        <div className="pokeball pokeball-loader"></div>
                    </div>
                )}
            </div>
        </div>
        
    )
};

export default Pokemon;