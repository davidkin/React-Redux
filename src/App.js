import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'David', age: '20' },
      { id: 2, name: 'Misha', age: '25' },
      { id: 3, name: 'Masha', age: '23' }
    ]
  }

  componentDidMount() {
    console.log("component mounted");
  }

  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    const ninjas = [ ...this.state.ninjas, newNinja ];

    this.setState({
      ninjas: ninjas
    })
          
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated', prevState);
    
  }

  deleteNinja = (id) => {
    const ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);

    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome !!!</p>

        <Ninjas ninjas={ this.state.ninjas } onDeleteNinja={ this.deleteNinja }/>
        <AddNinja onAddNinja={ this.addNinja } />
      </div>
    );
  }
}

export default App;
