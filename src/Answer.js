import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import _ from "lodash";

import { getPokemon } from "../src/actions/hangman"


class Answer extends Component {
   
componentDidMount = ()=>
        {
            this.props.getPokemon()
        }

    render()
    {
       
        
    //wordToShow
     var wordToShow = _.map((this.props.hangman.wordToShow), function(char, index){
                return <li key={index}>{char}</li>
            })
        return(
               
                  <ul className="inline ">{ wordToShow }</ul>
                
            )
        }
    

    
}
//actionCreator call
const mapDispatchToProps = (dispatch)=>{
    return {
        getPokemon : ()=>{
            return dispatch(getPokemon());
        }
    }
}

export default connect((state)=>{
   
    return {
        hangman : state.hangman
    }
},mapDispatchToProps)(Answer);

