import React from 'react';
import {
    HashRouter as Router,//容器
    Route, //一条路由
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';//主页
import User from './User';//用户
import Profile from './Profile';//个人设置
export default (
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            珠峰用户管理系统
                        </div>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/user">用户管理</Link></li>
                        <li><Link to="/profile">个人设置</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Route path="/home" component={Home}/>
                        <Route path="/user" component={User}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                </div>
            </div>

        </div>
    </Router>
)