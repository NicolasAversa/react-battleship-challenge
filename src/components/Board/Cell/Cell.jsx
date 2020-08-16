import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'ui-neumorphism';
import styles from './Cell.module.css';

const propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  click: PropTypes.func.isRequired,
};

function Cell(props) {
  const { x, y, status, board, click } = props;

  return (
    <Card inset={status === 'occupied'} className={`w-100 m-2 position-relative ${styles.card}`}>
      <button
        type="button"
        onClick={() => click(board, x, y)}
        className={`w-100 h-100 border-0 position-absolute d-flex align-items-center justify-content-center ${styles.button}`}
      >
        <span className="material-icons"></span>
      </button>
    </Card>
  );
}

Cell.propTypes = propTypes;

export default Cell;
