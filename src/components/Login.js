import React from 'react';
export default function(props){
    return <button className="btn btn-primary" onClick={()=>{
        localStorage.setItem('login','true');
        props.history.push(props.location.yyy);
    }}>登录</button>
}