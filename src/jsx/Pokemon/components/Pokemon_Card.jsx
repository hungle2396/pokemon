import React from "react";

const Pokemon_Card = ({ pokemonData }) => {
    
    return (
        <div className="pokemon__Card">
            <h1># {pokemonData.id}</h1>
            <figure className="pokemon__Card__figure">
                
                <img className="pokemon__Card__img" src={pokemonData.img} />
            </figure>

            <h1 className="pokemon__Card__name">{pokemonData.name}</h1>
            
            <div className="search__pokemon--types">
                {pokemonData.types ? (
                    pokemonData.types.map((type) => {
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

            <h2>Height: {pokemonData.height}</h2>
            <h2>Weight: {pokemonData.weight}</h2>
            <h2>Color: {pokemonData.color}</h2>
            <br></br>
            <p>Description: {pokemonData.description}</p>
            <br></br>
        </div>
    );
};

export default Pokemon_Card;