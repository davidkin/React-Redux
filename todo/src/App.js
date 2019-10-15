import React, { Component } from 'react';
import Todos from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Play with friends' },
    ]
  }

  deleteItem = (id) => {
    const todos = this.state.todos.filter(item => item.id !== id);

    this.setState({
      todos: todos,
    })
  }
  
  addItem = (todo) => {
    const { todos } = this.state;

    todo.id = todos[todos.length - 1].id + 1;

    const newTodos = [ ...todos, todo ];
  
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>

        <Todos todos={ this.state.todos } onDeleteItem={ this.deleteItem } />
        <AddTodo onAddItem={ this.addItem } />
      </div>
    );
  }
}

export default App;
