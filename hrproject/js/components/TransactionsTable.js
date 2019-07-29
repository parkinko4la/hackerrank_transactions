import React, { Component } from 'react';
import TransactionCell from './TransactionCell';

class TransactionsTable extends Component {
  state = {
    transactions: []
  }

  _sortTransactions = (transactions) => {
    return this.transactions.sort((transactionA, transactionB) => {
      //received time, network, number (sort in this order)
      if (transactionA.receivedTime === transactionB.receivedTime) {
        if (transactionA.ccNetwork === transactionB.ccNetwork) {
          return transactionA.ccNumber - transactionB.ccNumber;
        } else {
          return transactionA.ccNetwork - transactionB.ccNetwork;
        }
      } else {
        return transactionA.receivedTime - transactionB.receivedTime;
      }
    });
  }

  render() {
    return (
      <div>
        {this._sortTransactions(this.transactions).map(transaction => (
          <TransactionCell
            key={`transaction-${transaction.transactionID}`}
            transaction={transaction}
        )}
      </div>
    );
  }
}

export default TransactionsTable;
