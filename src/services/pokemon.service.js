import { pokemonRepository } from "../repositories/pokemon.repository.js";

class PokemonServices{
    async putPokemon(id,dados){
        const pokemonAtualizado = await pokemonRepository.putPokemon(id,dados);
        return pokemonAtualizado;
    };
    async knexPokemon(id_pokemon,dados){
        const pokemonAtualizado = await pokemonRepository.knexPokemon(id_pokemon,dados);
        return pokemonAtualizado;
    };
};

export const pokemonServices = new PokemonServices();