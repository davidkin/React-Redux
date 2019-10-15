import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

import { store } from './engine/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          
          <BrowserRouter>
            <div className="App">

                <Navbar />

                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path="/about" component={ About } />
                  <Route path="/contact" component={ Contact } />
                  <Route path="/:post_id" component={ Post } />
                </Switch>

            </div>
          </BrowserRouter>

        </Provider>
    );
  }
}

export default App;
