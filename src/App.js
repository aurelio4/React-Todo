import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

export default class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      task: '',
      todos: [
      {
        task: 'test 1',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'test 2',
        id: 1528817084358,
        completed: false
      }]
    }
  }

  pushTodo = () => {
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({ 
      task: '',
      todos: [...this.state.todos, newTodo]
    })
  }

  removeTodos = () => {
    while(this.state.todos.length) {
      this.state.todos.pop();
    }
    this.setState({ task: '' })
  }


  removeCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  toggleTodoCompletion = (id) => {
    const todoIndex = this.state.todos.findIndex(todo => todo.id === id)
    const todo = this.state.todos[todoIndex]
    const updatedTodo = {...todo, completed: !todo.completed}
    const newTodos = [...this.state.todos]
    newTodos[todoIndex] = updatedTodo
    this.setState({
      todos: newTodos
    })
  }

  getTodoValue = e => {
    this.setState({ task: e.target.value })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleTodoCompletion={this.toggleTodoCompletion} />
        <TodoForm
          addTodo={this.pushTodo} 
          removeTodos={this.removeTodos} 
          taskState={this.state.task} 
          getTodoValue={this.getTodoValue}
          removeCompleted={this.removeCompletedTodos} />
      </div>
    );
  }
}