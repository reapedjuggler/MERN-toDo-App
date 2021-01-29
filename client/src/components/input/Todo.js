import axios from 'axios';
import React, { Component } from 'react'

import List from './List';
import Input from './List';

class Todo extends Component {
    
    constructor(props) {
        super(props);
        state = {
            todos: [],
        }
    }

    componentDidMont(){
        this.getTodos();
    }    
    
    getTodos = () => {
        axios.get('/api/todos')
        .then((res) => {
            this.setState({todos: res.data});
        })    
        .catch((err) => console.log(err, "\n\nReact"));
    }

    deleteTodo = (id) => {
        axios.delete(`/api/delete/${id}`)
        .then ((res) => {
            if (res.data) {
                this.getTodos();
            }
        })
        .catch((err) => console.log(err, "\n\n not possible\n"));
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>

                <Input getTodos = {this.getTodos}></Input>
                <List deletTodo = {this.deletTodo}></List>

            </div>
        )
    }
}

export default Todo;
