import React, { useState } from 'react';

const Form = ({ type, updateTransactions }) => {
  const [amount, setAmount] = useState();

  const handleAmountInputChange = (e) => {
    const amount = e.target.value;
    if (+amount < 0) {
      return setAmount('');
    }
    setAmount(amount);
  };

  return (
    <div className="col-md-6">
      <form
        onSubmit={(e) => {
          updateTransactions(e, type, amount);
          setAmount('');
        }}
        className="form-group shadow p-4"
      >
        <h4 className="text-capitalize">{type}</h4>
        <input
          onChange={(e) => handleAmountInputChange(e)}
          type="number"
          placeholder="$ amount you want to deposit"
          className="form-control my-4"
          value={amount}
        />
        <button
          className={`text-capitalize btn ${
            type === 'deposit' ? 'btn-success' : 'btn-danger'
          }`}
        >
          {type}
        </button>
      </form>
    </div>
  );
};

export default Form;
