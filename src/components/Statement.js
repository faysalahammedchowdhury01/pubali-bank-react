import React from 'react';

const StateMent = ({ type, amount, className }) => {
  // number with commas
  function numberWithCommas(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <div className="col-md-4">
      <div className={`${className} text-white py-2 px-4 rounded`}>
        <h4 style={{ textTransform: 'capitalize' }}>{type}</h4>
        <h3>{numberWithCommas(amount.toFixed(2))} TK</h3>
      </div>
    </div>
  );
};

export default StateMent;
