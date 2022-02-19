import React from 'react';
import classes from '../styles/TransactionHistory.module.css';
import Transaction from './Transaction';

function TransactionHistory({ transactions }) {
  return (
    <div className="history-box">
      <h4>Transaction History</h4>
      {transactions.length ? (
        <>
          <input
            type="text"
            placeholder="Search Transaction by Transaction Type, TrxID or Time"
            className="form-control history-filter mt-3"
          />
          <div className={classes.history}>
            <ul className="p-0 m-0">
              {transactions.map((transaction) => (
                <Transaction
                  key={transaction.trxid}
                  type={transaction.type}
                  amount={transaction.amount}
                  trxid={transaction.trxid}
                  currentTime={transaction.currentTime}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="text-muted">No Transaction to show!</p>
      )}
    </div>
  );
}

export default TransactionHistory;
