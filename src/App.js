import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state.



  state= {
    todoList: [
      {
        id: 1,
        title: 'YYYEEEEAAAHHH BOOOIIIIIIIII',
        completed: false,
      },


      {
        id: 2,
        title: 'what the heck am I doing?',
        completed: false,
      },


      {
        id: 3,
        title: 'today is confusion',
        completed: false,
      },


      {
        id: 4,
        title: 'Toes have no "toe tips", yet we Tip Toe...',
        completed: false,
      },
    ],

    id: '',
    title: '',
    completed: '',
  };




  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };




  addTask = event =>{
    event.preventDefault()
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: Date.now(),
          title: this.state.title,
          completed: false,
        }
      ]
    })
  };




  render() {

    // console.log(this.state.todoList)
    console.log(this.state)

    return (
      <div className='theApp'>
        <div className='container'>

          <h3>This project is confusion..</h3>

          <TodoList todoList={this.state.todoList} />

          <TodoForm
          title={this.state.title}
          completed={this.state.completed}
          changeHandler={this.changeHandler}
          addTask={this.addTask} 
          />
        </div>
      </div>
    );
  }
}

export default App;
