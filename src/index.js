import {createStore} from './redux';
import $ from 'jquery';
//就是管理员函数，
//state是旧的状态对象，action是动作对象 {type:'INCREMENT'}
let reducer = (state={number:0},action={})=>{
    switch (action.type){
        case 'ADD'://加1
            return {number:state.number+1};
        case 'SUB'://减1
            return {number:state.number-1};
        default:
            return state;
    }
}

let store = createStore(reducer);

$(document.body).append(`
<div>
  <p id="counter"></p>
  <button id="addBtn">+</button>
  <button id="subBtn">-</button>
</div>
`);
let render = ()=>$('#counter').html(store.getState().number);
store.subscribe(render);
render();
//简化调用 不容易出错 ActionCreator
let addNum = ()=>{
    return {type:'ADD'};
}
let subNum = ()=>{
    return {type:'SUB'};
}
$('#addBtn').click(()=>{
    store.dispatch(addNum());
});
$('#subBtn').click(()=>{
    store.dispatch(subNum());
});




