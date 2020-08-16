import React from 'react';
import Col from 'react-bootstrap/Col';
import Cell from '../Cell/Cell';

function Board(props) {
  const { board, playableBoard, click } = props;

  let selectedBoard = [];
  if (playableBoard) {
    selectedBoard = board.playerBoard;
  } else {
    selectedBoard = board.cpuBoard;
  }

  const renderedBoard = selectedBoard.map((cellGroup, index) => (
    <div key={index} className="mb-3 d-flex flex-nowrap">
      {cellGroup.map((cell) => (
        <Cell
          x={cell.x}
          y={cell.y}
          key={cell.id}
          click={click}
          status={cell.status}
          board={selectedBoard}
        />
      ))}
    </div>
  ));

  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
      {renderedBoard}
    </Col>
  );
}

export default Board;
