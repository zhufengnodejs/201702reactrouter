import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
class Todos extends React.Component {
    constructor(){
        super();
        this.state = {todos:[]};
    }
    handleKeyDown = (event)=>{
        if(event.keyCode == 13 ){
            let content = event.target.value;
            this.state.todos.push({
                id:Date.now(), content, completed:false
            });
            this.setState({todos:this.state.todos});
            event.target.value = '';
        }
    }
    handleClick = (id)=>{
        let todos = this.state.todos.filter(todo=>todo.id != id);
        this.setState({todos});
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.todos.map(todo=><li>{todo.content} <button onClick={()=>this.handleClick(todo.id)}>-</button></li>)
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