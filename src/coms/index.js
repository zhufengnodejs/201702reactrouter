import store from '../store';
import React from 'react';
import * as actionTypes from '../store/action-types';
class Todos extends React.Component {
    constructor(){
        super();
        this.state = {todos:[]};
    }
    //组件将要挂载
    componentWillMount(){
        store.subscribe(()=>{
            let todos = store.getState().todos;
            let filter = store.getState().filter;
            todos = todos.filter(todo=>{
                switch (filter){
                    case 'active'://只显示活动状态的todo的话
                        return !todo.completed;
                    case 'completed':
                        return todo.completed;
                    default:
                        return true;
                }
            });
            this.setState({todos});
        })
    }
    handleKeyDown = (event)=>{
        if(event.keyCode == 13 ){
            let content = event.target.value;
            store.dispatch({type:actionTypes.ADD_TODO,content})
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
    constructor(){
        super();
        this.state = {filter:'all'};
    }
    render() {
        return (
            <div>
                {
                    this.state.filter=='all'?<span>全部</span>:<button onClick={()=>this.setState({filter:'all'})}>全部</button>
                }
                {
                    this.state.filter=='active'?<span>未完成</span>:<button onClick={()=>this.setState({filter:'active'})}>未完成</button>
                }
                {
                    this.state.filter=='completed'?<span>已完成</span>:<button  onClick={()=>this.setState({filter:'completed'})}>已完成</button>
                }
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
export default TodoApp;