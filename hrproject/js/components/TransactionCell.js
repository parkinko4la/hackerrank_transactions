import React, { Component } from 'react';

class TransactionCell extends Component {
  state = {
    transaction: null
  }

  render() {
    const {
      transactionID, receivedTime, ccNetwork, ccNumber, amount, status, progress
    } = this.transaction;

    return (
      <div>
        <h1>{transactionID}</h1>
        <div>Received: {receivedTime}</div>
        <div>Network {ccNetwork}</div>
        <div>Number {ccNumber}</div>
        <div>Amount {amount}</div>
      </div>
    );
  }
}
