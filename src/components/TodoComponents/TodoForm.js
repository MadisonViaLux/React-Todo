import React from 'react';
import "./Todo.css"


const TodoForm = (props) => {
    console.log(props)
    return(
        <form onSubmit={props.addTask}>
            <input
                placeholder='...todo'
                type='text'
                name='title'
                onChange={props.changeHandler}
                value={props.title}
            />

        </form>
    )
};

export default TodoForm;