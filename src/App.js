import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <AddBill />
    );
  }
}

class AddBill extends Component {
  render() {
    return(
    <div className="add-bill">
      <h1>New Bill</h1>

    </div>
    );
  }
}

export default App;
