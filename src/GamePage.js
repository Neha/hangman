import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import Alphabats from './Alphabats';
import Answer from  './Answer';
import LifeCounter from './LifeCounter';

class GamePage extends Component  {
    
    render()    {
        
          return (
            <div className="row-fluid text-center">
            <div className="span12">
                    <h1>HANGMAN</h1>
                    <p>Guess the Name of Pokeman.</p>
            </div>
        
            <div className="row-fluid">  
                <div className="hero-unit span12">
                    <LifeCounter/>
                    <Answer />
                    <Alphabats/>
                </div>
            </div> 
        </div>
        )
    }
}




export default GamePage;
