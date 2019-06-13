import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
    console.log(props)
    return(
        <div>
            {props.todoList.map(todo => (
                <Todo 
                key={todo.id}
                todo={todo.title}
                />
            ))}
        </div>
    )
}

export default TodoList;