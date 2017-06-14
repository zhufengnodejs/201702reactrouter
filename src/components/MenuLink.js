/**
 * 有些时候我们希望一个组件不管是否匹配都显示一些东西
 * component 对应一个组件 当URL路径跟当前Route path匹配时渲染
 * render 对应一个匿名组件函数 当URL路径跟当前Route path匹配时渲染
 *
 */
import React from 'react';
import {Route,Link} from 'react-router-dom';
// children不管当前路径是否匹配上，都会渲染对应的组件
export default function({to,text}){
  return (
      <Route path={to} children={({match})=>{
          return <li className={match?'active':''}><Link to={to}>{text}</Link></li>
      }} />
  )
}