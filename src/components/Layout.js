import React from 'react';
import Forms from './Forms';
import Header from './Header';
import MiniStatement from './MiniStatement';
import TransactionHistory from './TransactionHistory';

const Layout = () => {
  return (
    <>
      <Header />
      <MiniStatement />
      <div className="container-xl mt-5">
        <div className="row g-5">
          <div className="col-lg-8">
            <Forms />
          </div>
          <div className="col-lg-4">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
