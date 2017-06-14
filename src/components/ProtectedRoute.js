//当通过函数来定义组件的时候参数是属性对象
//当一个组件不需要状态的时候可以用函数来声明
//当一个组件必须需要状态的时候必须用类声明
// props= {path:"/profile",component:Profile}
// rest = {path:"/profile"}
//<Route path="/profile"/>
//location 当前路径 pathname    /profile
//history 可以用来跳转路径
//match 匹配对象，匹配上有就值，匹配不上就没有值
//是当前路径和Route的path属性匹配的结果
import React from 'react';
import {Redirect,Route} from 'react-router-dom';
export default function({component:Xxx,...rest}){
   return <Route {...rest} render={(props)=>
       localStorage.getItem('login')?<Xxx/>:<Redirect to={{
           pathname:'/login',
           yyy:props.location.pathname// /profile
       }}/>
   }/>
}