import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
class Todos extends React.Component {
    constructor(){
        super();
        this.state = {todos:[{id:Date.now(),content:'学习React',completed:false}]};
    }
    render() {
        return (
            <div>
                <input type="text"/>
                <ul>
                    {
                        this.state.todos.map(todo=><li>{todo.content}</li>)
                    }
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