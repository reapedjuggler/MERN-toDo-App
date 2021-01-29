import React from 'react';

const List = ({todos, deleteTodo}) => {
    return (
        <ul>
            {
                (todos && todos.length) ?

                todos.map((todo) => <li key = {todo._id} 
                
                onClick = {() => deleteTodo(todo._id)}> {todo.action} 
                
                </li>)
                
                : <li>Empty, Add some work!</li>

            }

        </ul>
    )
}

export default List;