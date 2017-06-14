//创建一个仓库
let createStore = (reducer)=>{
    let state;//先定义一个默认值
    let listeners = [];//存放着所有的监听函数
    let getState = ()=>state;
    //订阅状态变化事件，当状态发生变化的时候会调用listener函数
    let subscribe = listener=>{
        listeners.push(listener);
        //调用subscribe的返回值会取消掉此函数的监听
        return ()=>{
            listeners = listeners.filter(l=>l!=listener);//调用此函数表示取消订阅
        }
    }
    //派发action
    let dispatch = (action)=>{//{type:'ADD'}
        //把老的状态和action传入reducer,返回新的状态
        state = reducer(state,action);
        listeners.forEach(l=>l());
    }
    dispatch();
    return {
        getState,//获取最新的状态
        subscribe,//订阅状态变化事件
        dispatch //派发action 改变状态 使监听函数执行
    }
}
export {createStore};