import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Cell from './Cell/Cell';
import PlayerHeader from './PlayerHeader/PlayerHeader';

const propTypes = {
  board: PropTypes.objectOf(PropTypes.array),
  playableBoard: PropTypes.bool,
  playerName: PropTypes.string,
  click: PropTypes.func.isRequired,
};

const defaultProps = {
  board: [],
  playableBoard: false,
  playerName: 'CPU board',
};

function Board(props) {
  const { board, playableBoard, playerName, click, mouseover } = props;

  let selectedBoardKey = '';
  let selectedBoardData = [];
  if (playableBoard) {
    selectedBoardKey = 'playerBoard';
    selectedBoardData = board.playerBoard;
  } else {
    selectedBoardKey = 'cpuBoard';
    selectedBoardData = board.cpuBoard;
  }

  const renderedBoard = selectedBoardData.map((cellGroup, index) => (
    <div key={index} className="d-flex flex-nowrap">
      {cellGroup.map((cell) => (
        <Cell
          x={cell.x}
          y={cell.y}
          key={cell.id}
          mouseover={mouseover}
          click={click}
          status={cell.status}
          boardKey={selectedBoardKey}
          boardData={selectedBoardData}
        />
      ))}
    </div>
  ));

  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
      <PlayerHeader title={playerName} />
      {renderedBoard}
    </Col>
  );
}

Board.propTypes = propTypes;
Board.defaultProps = defaultProps;

export default Board;
