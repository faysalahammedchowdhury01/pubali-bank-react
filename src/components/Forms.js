import React from 'react';
import Form from './Form';

const Forms = ({ updateTransactions }) => {
  return (
    <div className="row g-5">
      <Form type="deposit" updateTransactions={updateTransactions} />
      <Form type="withdraw" updateTransactions={updateTransactions} />
    </div>
  );
};

export default Forms;
