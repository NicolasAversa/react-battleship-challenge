import React from 'react';
import Row from 'react-bootstrap/Row';
import { Card } from 'ui-neumorphism';

import Cell from '../Cell/Cell';

function Board(props) {
  const { board, playableBoard, click } = props;

  let selectedBoard = [];
  if (playableBoard) {
    selectedBoard = board.playerBoard;
  } else {
    selectedBoard = board.cpuBoard;
  }

  const renderedBoard = selectedBoard.map((square) => (
    <Cell x={square.x} y={square.y} key={square.id} click={click} board={selectedBoard} />
  ));

  return (
    <>
      <Row className="no-gutters">{renderedBoard}</Row>
    </>
  );
}

export default Board;
