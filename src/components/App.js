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
import Login from './Login';
import MenuLink from './MenuLink';
import ProtectedRoute from './ProtectedRoute';
/**
 * 当用户访问个人设置的时候，先判断此用户是否已经登录，如果已经登录则可以直接显示个人设置页面。如果此用户未登录，那么则跳转到登录页面进行登录，如果登录成功则自动跳回登录前的页面。
 */
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
                        <MenuLink text="首页" to="/home"/>
                        <MenuLink text="用户管理" to="/user"/>
                        <MenuLink text="个人设置" to="/profile"/>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Switch>
                            <Route exact path="/" render={props=><div>首页</div>}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/user" component={User}/>
                            <Route path="/login" component={Login}/>
                            <ProtectedRoute path="/profile" component={Profile}/>

                        </Switch>
                    </div>
                </div>
            </div>

        </div>
    </Router>
)