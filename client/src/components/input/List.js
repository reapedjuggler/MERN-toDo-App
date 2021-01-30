import React from 'react';

const List = ({todos, deleteTodo}) => {

    console.log("\n", todos, "  " , todos.length, "  iam todos in delete\n\n");

    for (let i = 0; i < todos.length; i++) {
        console.log("\n", i + " obito", todos[i], "\n");
    }

    return (
        <ul>
            {
                (todos && todos.length) ?

                todos.map((todo) => <li key = {todo._id}> {todo.action} </li>)
                
                : 
                
                <li>Empty, Add some work!</li>

            }

        </ul>
    )
}

export default List;