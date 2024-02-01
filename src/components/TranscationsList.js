import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TranscationsList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
