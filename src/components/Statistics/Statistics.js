import React from 'react';
import PropTypes from 'prop-types';
import styled from './Statistics.module.css';

function generateColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styled.statistics}>
      <h2 className={styled.title}>{title.toUpperCase()}</h2>
      <ul className={styled.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styled.item}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={styled.label}>{stat.label}</span>
            <span className={styled.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: 'Default Title',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
