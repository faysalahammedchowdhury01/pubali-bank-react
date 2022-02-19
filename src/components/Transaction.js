import React from 'react';
import classes from '../styles/TransactionHistory.module.css';
const Transaction = ({ type, amount, trxid, currentTime }) => {
  // number with commas
  function numberWithCommas(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <li
        data-index="0"
        className={`${classes.historyItem} text-white p-2 my-3 rounded ${
          type === 'deposit' ? classes.plus : classes.minus
        }`}
      >
        <span className="text-capitalize">{type}</span>
        <span className="float-end">
          {numberWithCommas(amount.toFixed(2))} TK
        </span>
        <span className={`d-block w-100 ${classes.trxid}`}>{trxid}</span>
        <span className={`d-block w-100 ${classes.transactionTime}`}>
          Time: {currentTime}
        </span>
      </li>
    </>
  );
};

export default Transaction;
