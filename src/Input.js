import React, { Component } from 'react';
import './App.css';
import List from './List'


class Input extends Component {
constructor() {
  super()
  this.state = {
    list: [],
    inputValue: '',
    disabled: true
  }
}
//The button STARTS disabled!

//The button becomes NOT disabled when the User gives the INPUT value,
// this allows us to use the onclick function
Change = (e) => {
  this.setState({inputValue: e.target.value});
  if(this.state.inputValue.length> 0){
    this.setState({disabled: false})
  }
}

//onClick function
//When the button is clicked we push the input value to the empty array.
//We than reset back to our original state, with an empty input value and a disabled button.
//The default  for onClick is to keep the value displayed in the input, and not allow another click.
//Re-disabling the button allows us to run the on click function again once the user adds value to the input.
pushToList = () => {
  this.state.list.push(this.state.inputValue)
  console.log(this.state.list);
  this.setState({inputValue: '', disabled: true})
}

  render() {
    return (
      <div>
        <button onClick={this.pushToList}
                disabled={this.state.disabled}>
                Click
        </button>
        <input onChange={this.Change}
                value={this.state.inputValue}
        />
        <List listItems={this.state.list} />
      </div>
    );
  }
}
//We define listItems in the List component so we can pass it's state over as a PROPS.
export default Input;
