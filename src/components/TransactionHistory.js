import React, { useEffect, useState } from 'react';
import classes from '../styles/TransactionHistory.module.css';
import Transaction from './Transaction';

function TransactionHistory({ transactions }) {
  const [searchTransaction, setSearchTransaction] = useState('');
  const [displayedTransactions, setDisplayedTransactions] = useState();

  // update displayed transactions
  useEffect(() => {
    setDisplayedTransactions(
      transactions.filter((transaction) => {
        return (
          transaction.type
            .toLowerCase()
            .includes(searchTransaction.toLowerCase()) ||
          transaction.amount
            .toString()
            .toLowerCase()
            .includes(searchTransaction.toLowerCase()) ||
          transaction.trxid
            .toLowerCase()
            .includes(searchTransaction.toLowerCase())
        );
      })
    );
  }, [searchTransaction, transactions]);

  return (
    <div className="history-box">
      <h4>Transaction History</h4>
      {transactions.length ? (
        <>
          <input
            onChange={(e) => setSearchTransaction(e.target.value)}
            type="text"
            placeholder="Search Transaction by Transaction Type, TrxID"
            className="form-control history-filter mt-3"
            value={searchTransaction}
          />
          <div className={classes.history}>
            <ul className="p-0 m-0">
              {displayedTransactions.map((transaction) => (
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
