import { combineReducers } from 'redux';
import hangman from './hangman';


const rootReducer  = combineReducers({hangman : hangman})

export default rootReducer;
