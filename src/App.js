import React, { Component } from 'react';

import Game from './Game';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
  render() {
    let player1 = "Danny"
    let player2 = "Nate"
    
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/game">Game</Link>{' '}
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
