import pokemon from "../data/pokemon"

// GET POKEMON NAME 
export function getPokemon()
    {
    var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
        return {
            type : "SAVE_POKEMON",
            payload : {
                pokemon : randomPokemon
            }
        }
    }


