import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Cell from './Cell/Cell';
import PlayerHeader from './PlayerHeader/PlayerHeader';

const propTypes = {
  board: PropTypes.objectOf(PropTypes.array),
  playableBoard: PropTypes.bool,
  click: PropTypes.func.isRequired,
};

const defaultProps = {
  board: [],
  playableBoard: false,
};

function Board(props) {
  const { board, playableBoard, click } = props;

  let selectedBoard = [];
  let boardName = '';
  if (playableBoard) {
    selectedBoard = board.playerBoard;
    boardName = ' Player board';
  } else {
    selectedBoard = board.cpuBoard;
    boardName = ' CPU board';
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
      <PlayerHeader title={boardName} />
      {renderedBoard}
    </Col>
  );
}

Board.propTypes = propTypes;
Board.defaultProps = defaultProps;

export default Board;
