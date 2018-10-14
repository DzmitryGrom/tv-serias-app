import React, { Component } from 'react';
import './App.css';
import Main from '../Main'
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series lists</h1>
        </header>
        <Main/>
      </div>
   
    );
  }
}

export default App;
