import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
let reducer = (state={number:0},action={})=>{
    //reducer一定要返一个全新的对象
    //所有的状态对象具有不变性
    switch (action.type){
        case 'ADD':
            return {number:state.number+1};
        case 'SUB':
            return {number:state.number-1};
        default:
            return state;
    }
}
//得到仓库对象
let store = createStore(reducer);
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number:0};
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({number:store.getState().number});
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <input type="text"/>
                <button onClick={()=>store.dispatch({type:'ADD'})}>+</button>
                <button onClick={()=>store.dispatch({type:'SUB'})}>-</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));