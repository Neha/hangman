import _ from "lodash";

function hangman(state = {}, action){

    switch(action.type)
        {
            case "SAVE_POKEMON" : 
                var newState = _.assign({}, state);
                newState.selectedPokemon = action.payload.pokemon;
                
                console.log(newState.selectedPokemon);

                newState.wordToShow = _.map(newState.selectedPokemon.split(""), function(){
                newState.optionsSelected = {};
                return "-";
                })

                // reseting the life and emoji
                newState.emoji = '';
                newState.life = 6;

            return newState;
            break;


            case "LOAD_ALPHABAT" : 
             var newState = _.assign({}, state);
                newState.loadAlphabats = action.payload.alphabat;
                
            return newState;
            break;

            case "CLICK_ALPHABAT" : 
             var newState = _.assign({}, state);
                 newState.clickAlphabats = action.payload.alphabet;
            
             var arr = newState.wordToShow,
                 word = newState.selectedPokemon.toLowerCase();
             
            if(word.indexOf( newState.clickAlphabats) != -1)
                {
                    for(var i = 0 ; i <= (word).length; i++){
                        if (word[i] == newState.clickAlphabats){
                            arr[i] = newState.clickAlphabats;
                        }
                       
                    }
                   
                    // converting array to string to match the selected pokemon
                    arr = arr.toString().replace(/,\s?/g,'');  
                    if(newState.selectedPokemon == arr){
                        newState.emoji = "yeah!! Pokemon Fan!!";
                    }
                    
                }
                else{
                    newState.life = newState.life - 1;
                }
            newState.optionsSelected[newState.clickAlphabats] = true;
            newState.selectedPokemon = newState.selectedPokemon.toLowerCase();
       
            /* Instead of Image I have used the text. Show the Win/Lost */
            if(newState.life == 0){
                if(newState.selectedPokemon == arr){
                    newState.emoji = 'yeah!! Pokemon Fan!!';
                }
                else{
                    newState.emoji = "You Lost!!";
                    newState.wordToShow = newState.selectedPokemon;
                }
            }
            return newState;
            break;
        }

    return state;
}

export default hangman;