import React,{Component} from 'react';
export default class UserDetail extends Component{
    render(){
        //history 跳转路由 路径
        //match匹配结果 如果匹配上就是对象，匹配不上就是null
        //location当前路径 pathname当前路径
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}