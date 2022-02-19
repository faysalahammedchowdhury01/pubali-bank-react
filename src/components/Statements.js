import React from 'react';
import Statement from './Statement';

const Statements = ({ depositTotal, withdrawTotal, totalBalance }) => {
  // statement classes
  const depositClasses = 'bg-success';
  const withdrawClasses = 'bg-danger';
  const totalBalanceClasses = 'bg-primary';

  return (
    <section>
      <div className="container-xl">
        <div className="row g-5">
          <div className="col-12">
            <div className="row g-4">
              <Statement
                type="deposit"
                amount={depositTotal}
                className={depositClasses}
              />
              <Statement
                type="withdraw"
                amount={withdrawTotal}
                className={withdrawClasses}
              />
              <Statement
                type="balance"
                amount={totalBalance}
                className={totalBalanceClasses}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statements;
