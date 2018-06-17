import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
constructor() {
  super()
  this.state = {
    value: '',
    list: []
  }
}

  render() {
    return (
      <div className="container">
        <h1 center>Task Manager 2.0</h1>
          <div className="row">
            <Input />
          </div>
      </div>
    );
  }
}

export default App;
