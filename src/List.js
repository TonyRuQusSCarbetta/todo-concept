import React, { Component } from 'react';
import './App.css';


class List extends Component {

  render() {
    return (
      <div className="">
        <ul>
            {this.props.listItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
    );
  }
}
//we map each item in the listItems array which returns the item in an li, because we need it to display block
export default List;
