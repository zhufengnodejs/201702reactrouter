import React, {Component} from 'react';
export default class UserDetail extends Component {
    render() {
        //history 跳转路由 路径
        //match匹配结果 如果匹配上就是对象，匹配不上就是null
        //location当前路径 pathname当前路径
        let id = this.props.match.params.id;
        //从缓存中读取用户列表字符串 null 字符串
        let userStr = localStorage.getItem('users');
        //转成对象数组
        let users = userStr ? JSON.parse(userStr) : [];
        let user = users.find(user => user.id == id);
        return (
            <table className="table table-responsive">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>姓名</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}