import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
    render(){
        return (
            <div>
                <p></p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));