import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'David', age: '20' },
      { id: 2, name: 'Misha', age: '20' },
      { id: 3, name: 'Masha', age: '20' }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome !!!</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
