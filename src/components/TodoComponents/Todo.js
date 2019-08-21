import React from 'react';



const Todo = (props) => {
    console.log(props)
    return(
        <div
        className={`${props.todo.completed ? ' todo-lines': ''}`}
        onClick={() => props.toggleButton(props.todo.id)}
        >
            {props.todo.title}
        </div>
    )
};


export default Todo;