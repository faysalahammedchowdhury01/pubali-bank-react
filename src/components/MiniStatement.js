import React from 'react';
import Statement from './Statement';

const MiniStatement = () => {
  return (
    <section>
      <div className="container-xl">
        <div className="row g-5">
          <div className="col-12">
            <div className="row g-4">
              <Statement />
              <Statement />
              <Statement />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniStatement;
