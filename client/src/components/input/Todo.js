import axios from 'axios';
import React, {Component} from 'react'

import List from './List';
import Input from './Input';

class Todo extends Component {
    
    // constructor(props) {
    //     super(props);

    // }


    state = {
        todos: [],
    }

    componentDidMount(){
        this.getTodos();
    }    
    
    getTodos = () => {
        console.log("End point hit\n");
        axios.get('http://localhost:8001/api/todos')
        .then((res) => {
            if (res.data) {
                this.setState({todos: res.data});
                console.log(res.data, "\n\n iam data in react\n\n", this.state.todos);
            }
        })    
        .catch((err) => console.log(err, "\n\nReact"));
    }

    deleteTodo = (id) => {
        axios.delete(`http://localhost:8001/api/delete/${id}`)
        .then ((res) => {
            if (res.data) {
                this.getTodos();
            }
        })
        .catch((err) => console.log(err, "\n\n not possible\n"));
    }

    render() {

        const {todos} = this.state;

        console.log(todos, "   iam todosssssssssssssssss");

        return (
            <div>
                <h1>Todos</h1>

                <Input getTodos = {this.getTodos} />
                <List todos = {todos} deleteTodo = {this.deleteTodo}></List>

            </div>
        )
    }
}

export default Todo;

