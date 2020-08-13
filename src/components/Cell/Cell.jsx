import React from 'react';
import { Fab } from 'ui-neumorphism';
import styles from './Cell.module.css';

function Square(props) {
  const { x, y, board, click } = props;

  return (
    <Fab text={false} size="medium" rounded onClick={() => click(board, x, y)} className="m-2">
      {x.toString() + y.toString()}
    </Fab>
  );
}

export default Square;
