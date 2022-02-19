import React from 'react';
import classes from '../styles/TransactionHistory.module.css';
import Transaction from './Transaction';

function TransactionHistory() {
  return (
    <div className="history-box">
      <h4>History</h4>
      <input
        type="text"
        placeholder="Search Transaction"
        className="form-control history-filter mt-3"
      />
      <div className={classes.history}>
        <ul className="p-0 m-0">
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </ul>
      </div>
    </div>
  );
}

export default TransactionHistory;
