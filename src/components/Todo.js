import React from 'react'
import './Todo.css'

export default class Todo extends React.Component {
  getCompletionText = () => {
    return `Mark ${this.props.completed ? 'Incomplete' : 'Complete'}`
  }

  render() {
    return (
      <div className="todo">
        <p 
        style={this.props.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
          {this.props.task}
        </p>
        <button onClick={this.props.toggleTodoCompletion}>{this.getCompletionText()}</button>
      </div>
    )
  }
}