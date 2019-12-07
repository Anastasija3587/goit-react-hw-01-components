import React from 'react';
import PropTypes from 'prop-types';
import styled from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styled.transactionHistory}>
    <thead>
      <tr>
        <th className={styled.title}>Type</th>
        <th className={styled.title}>Amount</th>
        <th className={styled.title}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styled.line}>
          <td className={styled.columb}>{item.type}</td>
          <td className={styled.columb}>{item.amount}</td>
          <td className={styled.columb}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
