import React, { Component } from 'react';
import Todos from './Todo';


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

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>

        <Todos todos={ this.state.todos } onDeleteItem={ this.deleteItem } />
      </div>
    );
  }
}

export default App;
