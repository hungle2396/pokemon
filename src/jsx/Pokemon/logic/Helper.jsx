import pokeAPI from "../api/pokeAPI";
import axios from "axios";

export const check_Evolution = async (pokemon_Evolution) => {
    let pokemon_One, pokemon_Two, pokemon_Three, evolution_One, evolution_Two, evolution_Three;
    let data = {};

    if (pokemon_Evolution.data.chain.evolves_to.length && !pokemon_Evolution.data.chain.evolves_to[0].evolves_to.length) {
        [pokemon_One, pokemon_Two, evolution_One, evolution_Two] = await Promise.all([
            pokeAPI.get(`pokemon/${pokemon_Evolution.data.chain.species.name}`),
            pokeAPI.get(`pokemon/${pokemon_Evolution.data.chain.evolves_to[0].species.name}`),
            axios.get(pokemon_Evolution.data.chain.species.url),
            axios.get(pokemon_Evolution.data.chain.evolves_to[0].species.url),
        ]);

        data = [
            {
                name: pokemon_One.data.name,
                height: (pokemon_One.data.height / 10),
                weight: (pokemon_One.data.weight / 10),
                id: pokemon_One.data.id,
                img: pokemon_One.data.sprites.other["official-artwork"].front_default,
                types: pokemon_One.data.types.map((type) => {
                    return type.type.name;
                }),
                abilities: pokemon_One.data.abilities.map((ability) => {
                    return ability.ability.name;
                }),
                color: evolution_One.data.color.name,
                description: evolution_One.data.flavor_text_entries[0].flavor_text
            },
            {
                name: pokemon_Two.data.name,
                height: (pokemon_Two.data.height / 10),
                weight: (pokemon_Two.data.weight / 10),
                id: pokemon_Two.data.id,
                img: pokemon_Two.data.sprites.other["official-artwork"].front_default,
                types: pokemon_Two.data.types.map((type) => {
                    return type.type.name;
                }),
                abilities: pokemon_Two.data.abilities.map((ability) => {
                    return ability.ability.name;
                }),
                color: evolution_Two.data.color.name,
                description: evolution_Two.data.flavor_text_entries[0].flavor_text
            }
        ]
    } else if (pokemon_Evolution.data.chain.evolves_to.length && pokemon_Evolution.data.chain.evolves_to[0].evolves_to.length) {
        [pokemon_One, pokemon_Two, pokemon_Three, evolution_One, evolution_Two, evolution_Three] = await Promise.all([
            pokeAPI.get(`pokemon/${pokemon_Evolution.data.chain.species.name}`),
            pokeAPI.get(`pokemon/${pokemon_Evolution.data.chain.evolves_to[0].species.name}`),
            pokeAPI.get(`pokemon/${pokemon_Evolution.data.chain.evolves_to[0].evolves_to[0].species.name}`),
            axios.get(pokemon_Evolution.data.chain.species.url),
            axios.get(pokemon_Evolution.data.chain.evolves_to[0].species.url),
            axios.get(pokemon_Evolution.data.chain.evolves_to[0].evolves_to[0].species.url)
        ]);

        data = [
            {
                name: pokemon_One.data.name,
                height: (pokemon_One.data.height / 10),
                weight: (pokemon_One.data.weight / 10),
                id: pokemon_One.data.id,
                img: pokemon_One.data.sprites.other["official-artwork"].front_default,
                types: pokemon_One.data.types.map((type) => {
                    return type.type.name;
                }),
                abilities: pokemon_One.data.abilities.map((ability) => {
                    return ability.ability.name;
                }),
                color: evolution_One.data.color.name,
                description: evolution_One.data.flavor_text_entries[0].flavor_text
            },
            {
                name: pokemon_Two.data.name,
                height: (pokemon_Two.data.height / 10),
                weight: (pokemon_Two.data.weight / 10),
                id: pokemon_Two.data.id,
                img: pokemon_Two.data.sprites.other["official-artwork"].front_default,
                types: pokemon_Two.data.types.map((type) => {
                    return type.type.name;
                }),
                abilities: pokemon_Two.data.abilities.map((ability) => {
                    return ability.ability.name;
                }),
                color: evolution_Two.data.color.name,
                description: evolution_Two.data.flavor_text_entries[0].flavor_text
            },
            {
                name: pokemon_Three.data.name,
                height: (pokemon_Three.data.height / 10),
                weight: (pokemon_Three.data.weight / 10),
                id: pokemon_Three.data.id,
                img: pokemon_Three.data.sprites.other["official-artwork"].front_default,
                types: pokemon_Three.data.types.map((type) => {
                    return type.type.name;
                }),
                abilities: pokemon_Three.data.abilities.map((ability) => {
                    return ability.ability.name;
                }),
                color: evolution_Three.data.color.name,
                description: evolution_Three.data.flavor_text_entries[0].flavor_text
            }
        ]
    } else {
        [pokemon_One, evolution_One] = await Promise.all([
            pokeAPI.get(`pokemon/${pokemon_Evolution.data.chain.species.name}`),
            axios.get(pokemon_Evolution.data.chain.species.url),
        ]);

        data = [
            {
                name: pokemon_One.data.name,
                height: (pokemon_One.data.height / 10),
                weight: (pokemon_One.data.weight / 10),
                id: pokemon_One.data.id,
                img: pokemon_One.data.sprites.other["official-artwork"].front_default,
                types: pokemon_One.data.types.map((type) => {
                    return type.type.name;
                }),
                abilities: pokemon_One.data.abilities.map((ability) => {
                    return ability.ability.name;
                }),
                color: evolution_One.data.color.name,
                description: evolution_One.data.flavor_text_entries[0].flavor_text
            }
        ]
    }

    return data;
};