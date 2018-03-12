// GET POKEMON NAME 
export function clickAlphabat(alphabet)
    {
        console.log(alphabet)
        return {
            type : "CLICK_ALPHABAT",
            payload : {
                alphabet : alphabet
            }
        }
    }
