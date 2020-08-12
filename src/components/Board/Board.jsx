import React from 'react';
import Col from 'react-bootstrap/Col';
import styles from './Board.module.css';

import Square from '../Square/Square';

function Board(props) {
  const { board, playableBoard, click } = props;

  let selectedBoard = [];
  if (playableBoard) {
    selectedBoard = board.playerBoard;
  } else {
    selectedBoard = board.cpuBoard;
  }

  const renderedBoard = selectedBoard.map((square) => (
    <Square x={square.x} y={square.y} key={square.id} click={click} board={selectedBoard} />
  ));

  return (
    <Col>
      <div className={styles.gameBoard}>{renderedBoard}</div>
    </Col>
  );
}

export default Board;
