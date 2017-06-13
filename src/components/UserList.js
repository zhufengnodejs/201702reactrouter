import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class UserList extends Component{
    constructor(){
        super();
        this.state = {users:[]};
    }
    componentWillMount(){
        //从缓存中读取用户列表字符串 null 字符串
        let userStr = localStorage.getItem('users');
        //转成对象数组
        let users = userStr?JSON.parse(userStr):[];
        this.setState({users});
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.users.map(user=>(
                        <li className="list-group-item">
                            <Link to={"/user/detail/"+user.id}>{user.name}</Link>
                        </li>
                    ))
                }

            </ul>
        )
    }
}