import alphabat from "../data/alphabats"

export function getAlphabats()
    {
        var alphabats = alphabat;
       
        return {
            type : "LOAD_ALPHABAT",
            payload : {
                alphabat : alphabats
            }
        }
    }
