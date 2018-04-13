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

        <label>
          Bill Title:
          <input type="text" name = "bill-name" />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" name = "bill-name" />
        </label>
        <br />
        <label>
          Day Due:
          <input type="text" name = "bill-name" />
        </label>
        <br />
        <button onClick="saveBill">
            Add Bill
        </button>
      
    </div>
    );
  }
}

class UpcomingBills extends Component{
  render() {
    return(
      <div>
        <BootstrapTable data={this.props.data}>
           <TableHeaderColumn dataField='name'>
           	Name
           </TableHeaderColumn>
           <TableHeaderColumn dataField='owed'>
           	Amount Owed
           	</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default App;
