import React from 'react';
import classes from '../styles/TransactionHistory.module.css';
const Transaction = () => {
  return (
    <>
      <li
        data-index="0"
        class={`${classes.historyItem} text-white p-2 my-3 rounded ${classes.minus}`}
      >
        <span>Deposit</span>
        <span className="float-end">11,000.00 TK</span>
        <span className={`d-block w-100 ${classes.trxid}`}>
          TrxID2955504265
        </span>
        <span className={`d-block w-100 ${classes.transactionTime}`}>
          Time: 2/17/2022, 6:56:43 PM
        </span>
      </li>
    </>
  );
};

export default Transaction;
