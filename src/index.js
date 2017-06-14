import {createStore} from './redux';
import $ from 'jquery';
//就是管理员函数，
//state是旧的状态对象，action是动作对象 {type:'INCREMENT'}
let reducer = (state=0,action={})=>{
    switch (action.type){
        case 'ADD'://加1
            return state+1;
        case 'SUB'://减1
            return state - 1;
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
store.subscribe(()=>{
    $('#counter').html(store.getState())
})

$('#addBtn').click(()=>{
    store.dispatch({type:'ADD'});
});
$('#subBtn').click(()=>{
    store.dispatch({type:'SUB'});
});




