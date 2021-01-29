import React, {useState, useEffect} from 'react';

const Input = () => {

    const [action, setAction] = useState('');

    const addTodo = () => {
        setAction(action);
    }

    return (
        <div>
            <input type = "text"
                value = {action} onChange={}
            />
        </div>
    )

}