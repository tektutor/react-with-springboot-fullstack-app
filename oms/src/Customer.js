import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class Customer extends Component {

  constructor(props) {
    super(props);
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
  }

  onSubmitButtonClick() {
    console.log("Customer submit button clicked");

    (async () => {
      const response = await axios({
        url: 'https://localhost:8080/customers',
        method: 'get'
      });

      console.log(response)
      }
    )();

  }

  render() {
    return (
      <div className="Customer">
        <header className="customer">
          <h2>Manage Customer</h2>
          <table>
              <tr>
              <td><label>Customer ID</label></td>
              <td><input type="number" id="customerID" min="1" max="100"></input></td>
            </tr>       
            <tr>
              <td><label>Customer Name</label></td>
              <td><input type="text" id="customerName"></input></td>
            </tr>
            <tr>
              <td><label>Shipping Address</label></td>
              <td><input type="text" id="shippingAddress"></input></td>
            </tr>
          </table>
          <button id="submit" onClick={this.onSubmitButtonClick}>Submit</button>
        </header>
      </div>
    );
  }

}


export default Customer;