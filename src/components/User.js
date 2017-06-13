import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';

export default class User extends Component{
    render(){
        return (
            <div className="row">
                <div className="col-sm-2">
                    <ul className="nav nav-stacked">
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/add">新增用户</Link></li>
                    </ul>
                </div>
                <div className="col-sm-10">
                    <Route path="/user/list" component={UserList}/>
                    <Route path="/user/add" component={UserAdd}/>
                </div>
            </div>
        )
    }
}