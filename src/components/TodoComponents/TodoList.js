import React from 'react';
import './Todo.css';
import Todo from './Todo';


const TodoList = (props) => {
    return(
        <div>
            {props.todoList.map(todo => (
                <Todo 
                key={todo.id}
                todo={todo.task}
                />
            ))}
        </div>
    )
}

export default TodoList;