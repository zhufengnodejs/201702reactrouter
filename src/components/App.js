import React from 'react';
import {
    BrowserRouter as Router,//容器
    Route, //一条路由
    Link,
    Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';//主页
import User from './User';//用户
import Profile from './Profile';//个人设置
let Hello = (props)=><div>hello {props.name}</div>
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
                        <Switch>
                            <Route exact path="/" render={props=><div>首页</div>}/>
                            <Route path="/:name" render={props=><div>{props.match.params.name}</div>}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/user" component={User}/>
                            <Route path="/profile" component={Profile}/>
                        </Switch>
                    </div>
                </div>
            </div>

        </div>
    </Router>
)