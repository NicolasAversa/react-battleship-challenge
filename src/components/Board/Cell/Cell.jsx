import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'ui-neumorphism';
import styles from './Cell.module.css';

const propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  boardKey: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  click: PropTypes.func.isRequired,
  mouseover: PropTypes.func,
  mouseout: PropTypes.func,
};

const defaultProps = {
  mouseover: () => {},
  mouseout: () => {},
};

function Cell(props) {
  const { x, y, status, boardKey, board, click, mouseover, mouseout } = props;

  let cardIcon = '';
  if (status === 'occupied') {
    cardIcon = 'directions_boat';
  }

  return (
    <Card inset={status === 'selected'} className={`w-100 m-2 position-relative ${styles.card}`}>
      <button
        type="button"
        onClick={() => click(boardKey, board, x, y)}
        onMouseOver={() => mouseover(boardKey, board, x, y)}
        onMouseOut={() => mouseout(boardKey, board, x, y)}
        onFocus={() => mouseover(boardKey, board, x, y)}
        className={`w-100 h-100 border-0 position-absolute d-flex align-items-center justify-content-center ${styles.button}`}
      >
        <span className="material-icons">{cardIcon}</span>
      </button>
    </Card>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(Cell);
