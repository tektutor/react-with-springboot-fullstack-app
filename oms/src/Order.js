import React from 'react';
import {Component} from 'react';


class Order extends Component {

  onSubmitClick = () => {
    console.log ("Submit button clicked");
  }

  render() {
    return (
      <div className="Order">
        <header className="order">
            <h2>Manage Order</h2>
          <table>
            <tbody>            
              <tr>
              <td><label>Customer ID</label></td>
              <td><input type="number" id="customerID"></input></td>
            </tr>
            <tr>
              <td><label>Order ID</label></td>
              <td><input type="number" id="orderID"></input></td>
            </tr>
            <tr>
              <td><label>Shipping Address</label></td>
              <td><input type="text" id="shippingAddress"></input></td>
            </tr>
            </tbody>

          </table>
          <button id="submit" onClick={ this.onSubmitClick }>Submit</button>
        </header>
      </div>
    );
  }
}

export default Order;