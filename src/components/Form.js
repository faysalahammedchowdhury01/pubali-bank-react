import React from 'react';

const form = () => {
  return (
    <div className="col-md-6">
      <form className="deposit-form form-group shadow p-4">
        <h4>Deposit</h4>
        <input
          type="number"
          placeholder="$ amount you want to deposit"
          className="form-control deposit-input my-4"
        />
        <button className="btn btn-success deposit-btn">Deposit</button>
      </form>
    </div>
  );
};

export default form;
