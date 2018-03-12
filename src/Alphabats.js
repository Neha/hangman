import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { getAlphabats } from "../src/actions/alphabats"
import { clickAlphabat } from "../src/actions/click"
import { getPokemon } from "../src/actions/hangman"
import _ from "lodash";



class Alphabats extends Component {

componentDidMount = ()=>
    {
        this.props.getAlphabats()
    }

render()
{
    var alpha = _.map((this.props.hangman.loadAlphabats), (index) => {
            return <li key = {index} className="btn"><button disabled={this.props.hangman.life <= 0 || this.props.hangman.optionsSelected[index]}  onClick = { () => {this.props.clickAlphabat(index)} }>{index}</button></li>
    })
    return(
        <div>
            <ul className="inline">
                {alpha}
            </ul>
            <p>{this.props.hangman.emoji}</p>
            <button onClick= {this.props.getPokemon} className="btn btn-primary btn-large">New Game</button>
        </div>
    )
}

}

const mapDispatchToProps = (dispatch)=>{
    return {
       
        getPokemon : () =>{
            return dispatch(getPokemon());
        },
        getAlphabats : () =>{
            return dispatch(getAlphabats());
        },

        clickAlphabat : (alphabet)=>{
            return dispatch(clickAlphabat(alphabet));
        }
    }
}

export default connect((state)=>{
    
    return {
    hangman : state.hangman
    }
},mapDispatchToProps)(Alphabats);






