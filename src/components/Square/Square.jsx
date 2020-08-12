import React from 'react';
import styles from './Square.module.css';

function Square(props) {
  const { x, y, board, click } = props;

  return (
    <div onClick={() => click(board, x, y)} className={styles.square}>
      {x.toString() + y.toString()}
    </div>
  );
}

export default Square;
