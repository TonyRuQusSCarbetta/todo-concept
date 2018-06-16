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
      <div className="">
        <Input />
      </div>
    );
  }
}

export default App;
