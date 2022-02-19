import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Forms from './Forms';
import Header from './Header';
import Statements from './Statements';
import TransactionHistory from './TransactionHistory';

const App = () => {
  // transactions
  const [transactions, setTransactions] = useState([]);

  // deposit transactions
  const depositTransactions = transactions.filter(
    (transaction) => transaction.type === 'deposit'
  );

  // deposit total
  const depositTotal = depositTransactions.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  // withdraw transactions
  const withdrawTransactions = transactions.filter(
    (transaction) => transaction.type === 'withdraw'
  );

  // withdraw total
  const withdrawTotal = withdrawTransactions.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  // total balacne
  const totalBalance = depositTotal - withdrawTotal;

  /* get random trxid */
  function randomTrxId() {
    return `TrxID${Math.round(Math.random() * 10000000000)}`;
  }

  // update transaction
  const updateTransactions = (event, type, amount) => {
    event.preventDefault();

    // validation
    if (isNaN(amount) || amount === '' || +amount === 0) {
      return;
    }

    // validation for withdraw
    if (type === 'withdraw' && amount > totalBalance) {
      // throw error alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "You don't have enough money to Withdraw!",
      });
      return;
    }

    // new transaction
    const newTransaction = {
      trxid: randomTrxId(),
      type: type,
      amount: +amount,
      currentTime: new Date().toLocaleString(),
    };

    // new transactions
    const newTransactions = [newTransaction, ...transactions];

    // update transactions
    setTransactions(newTransactions);

    // throw success alert
    Swal.fire('', `BTD ${amount} ${type} successfully!`, 'success');
  };

  return (
    <>
      <Header />
      <Statements
        depositTotal={depositTotal}
        withdrawTotal={withdrawTotal}
        totalBalance={totalBalance}
      />
      <div className="container-xl mt-5">
        <div className="row g-5">
          <div className="col-lg-8">
            <Forms updateTransactions={updateTransactions} />
          </div>
          <div className="col-lg-4">
            <TransactionHistory transactions={transactions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
