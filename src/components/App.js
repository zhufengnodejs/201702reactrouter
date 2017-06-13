import React from 'react';
import {
    HashRouter as Router,//容器
    Route //一条路由
} from 'react-router-dom';
import Home from './Home';//主页
import User from './User';//用户
import Profile from './Profile';//个人设置
export default (
    <Router>
        <div>
            <Route path="/home" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Router>
)