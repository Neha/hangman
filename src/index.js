import React from 'react';
import ReactDOM from 'react-dom';

import GamePage from './GamePage';
import store from './store';
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <GamePage />
    </Provider>, 
document.getElementById('hangman'));
  
