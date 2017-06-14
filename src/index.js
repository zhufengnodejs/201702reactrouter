import {createStore} from './redux';
//就是管理员函数，
//state是旧的状态对象，action是动作对象 {type:'INCREMENT'}
let reducer = (state=0,action={})=>{
    switch (action.type){
        case 'INCREMENT'://加1
            return state+1;
        case 'DECREMENT'://减1
            return state - 1;
        default:
            return state;
    }
}
let store = createStore(reducer);

