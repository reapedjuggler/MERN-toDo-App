// import React, {useState, useEffect} from 'react';

// const Input = () => {

//     const [action, setAction] = useState('');

//     const addTodo = () => {
//         setAction(action);
//     }

//     return (
//         <div>
//             <input type = "text"
//                 value = {action} onChange={adddToDo} value = {action}
//             />
//         </div>
//     )
// }

import React from 'react';
import axios from 'axios';

class Input extends Component {

    state = {
        action: ''
    };

    addTodo = () => {

        const task = {
            action: this.state.action
        };

        if (task.action && task.action.length > 0) {

            axios.post('/api/todos', task) // API's endpoint
                .then(res => {
                    if (res.data) {
                        this.props.getTodos();
                        this.setState({
                            action: '',
                        });
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.log('Input is not valid');
        }

    }

    handleChange = (event) => {
        this.setState({
            action: event.target.value,
        })
    }

    render () {
        let {action} = this.state;

        return (
            <div>
                <Input 
                    type = "text"
                    onChange = {this.handleChange}
                    value = {action}  
                />

                <button>
                    onClick = {() => this.addTodo()}
                </button>
                Add Todo
            </div>
        )

    }

}



export default Input;