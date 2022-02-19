import React from 'react';
import logo from '../assets/images/pubali-bank.svg';

const Header = () => {
  return (
    <header className="py-5 px-3 px-xl-5">
      <div className="container-xl">
        <div className="row g-5">
          <div className="col-12 text-center mb-4 mb-md-5">
            <a href="index.html">
              <img
                style={{ width: '350px', maxWidth: '100%' }}
                src={logo}
                alt="pubali"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
