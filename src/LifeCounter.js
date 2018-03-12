import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

class LifeCounter extends Component{
    render(){
        return(
            <div>
            <p className="text-right">
            <strong> Chances left : <span>{this.props.life}</span>/6</strong>
            </p>
            </div>
        )
    }
}

export default connect((state)=>{
    
    return {
        life : state.hangman.life
    }
})(LifeCounter);

