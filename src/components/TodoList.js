// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  render() {
    return (
      <>
        {this.props.todos.map(todo => {
          return <Todo
                    todos={this.props.todos}
                    key={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggleTodoCompletion={() => this.props.toggleTodoCompletion(todo.id)} />
        })}
      </>
    )
  }
}