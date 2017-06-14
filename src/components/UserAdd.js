import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';
export default class UserAdd extends Component{
    constructor(props){
        super(props);
        //默认不阻止
        this.state = {blocking:false};
    }
    handleSubmit = ()=>{
     let name = this.name.value;
     //从缓存中读取用户列表字符串 null 字符串
     let userStr = localStorage.getItem('users');
     //转成对象数组
     let users = userStr?JSON.parse(userStr):[];
     //向此数组中加入新的对象
     users.push({id:Date.now(),name});
     //再把新数组保存到缓存中
     localStorage.setItem('users',JSON.stringify(users));
     this.setState({
         blocking:false
     },()=>{
         //再通过history对象的push方法跳转到用户列表页面
         this.props.history.push('/user/list');
     });
    }
    handleChange = (event)=>{
        this.setState({
            blocking:event.target.value&&event.target.value.length>0
        });
    }
    render(){
        return (
            <div>
                <Prompt
                    when={this.state.blocking}
                    message={(location)=>`你确定你要跳转到${location.pathname}吗?`}
                />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input type="text" className="form-control" onChange={this.handleChange} ref={ref=>this.name=ref}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}