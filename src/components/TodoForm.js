import React from 'react'

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  preventReload = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.preventReload}>
        <input type='input' value={this.props.taskState} onChange={this.props.getTodoValue} />
        <button type="submit" onClick={this.props.addTodo}>Add Todo</button>
        <button type="submit" onClick={this.props.removeCompleted}>Remove Completed</button>
        <button type="submit" onClick={this.props.removeTodos}>Clear Todos</button>
      </form>
    )
  }
}