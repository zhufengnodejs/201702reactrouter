class Todos extends React.Component {
    constructor(){
        super();
        this.state = {todos:[]};
    }
    handleKeyDown = (event)=>{
        if(event.keyCode == 13 ){
            let content = event.target.value;
            this.state.todos.push({
                id:Date.now(), content, completed:false
            });
            this.setState({todos:this.state.todos});
            event.target.value = '';
        }
    }
    handleClick = (id)=>{
        let todos = this.state.todos.filter(todo=>todo.id != id);
        this.setState({todos});
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.todos.map(todo=><li>{todo.content} <button onClick={()=>this.handleClick(todo.id)}>-</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
class Filter extends React.Component {
    constructor(){
        super();
        this.state = {filter:'all'};
    }
    render() {
        return (
            <div>
                {
                    this.state.filter=='all'?<span>全部</span>:<button onClick={()=>this.setState({filter:'all'})}>全部</button>
                }
                {
                    this.state.filter=='active'?<span>未完成</span>:<button onClick={()=>this.setState({filter:'active'})}>未完成</button>
                }
                {
                    this.state.filter=='completed'?<span>已完成</span>:<button  onClick={()=>this.setState({filter:'completed'})}>已完成</button>
                }
            </div>
        )
    }
}

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Todos/>
                <Filter/>
            </div>
        )
    }
}
export default TodoApp;