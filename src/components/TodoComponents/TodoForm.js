import React from 'react';
import "./Todo.css"


const TodoForm = (props) => {
    return(
        <form>
            <imput
                placeholder='...todo'
                type='text'
                name='your-todo'
                onChange={props.changeHandler}
                value={props.title}
            />

        </form>
    )
};

export default TodoForm;