import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
class Todos extends React.Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <ul>

                </ul>
            </div>
        )
    }
}
class Filter extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Todos/>
                <Filter/>
            </div>
        )
    }
}
ReactDOM.render(<TodoApp/>, document.querySelector('#root'));