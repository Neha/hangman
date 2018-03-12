import { createStore, compose} from  'redux';

import rootReducer from './reducers/index'
import pokemon from './data/pokemon'
import alphabats from './data/alphabats'



export default createStore(rootReducer);
