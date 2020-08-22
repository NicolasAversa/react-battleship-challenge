import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Cell from './Cell/Cell';
import PlayerHeader from './PlayerHeader/PlayerHeader';

const propTypes = {
  board: PropTypes.arrayOf(PropTypes.array),
  playableBoard: PropTypes.bool,
  playerName: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  mouseover: PropTypes.func,
  mouseout: PropTypes.func,
};

const defaultProps = {
  board: [],
  playableBoard: false,
  mouseover: () => {},
  mouseout: () => {},
};

function Board(props) {
  const { board, playableBoard, playerName, click, mouseover, mouseout } = props;

  let boardKey = '';
  if (playableBoard) {
    boardKey = 'player';
  } else {
    boardKey = 'cpu';
  }

  const renderedBoard = board.map((cellGroup, index) => (
    <div key={index} className="d-flex flex-nowrap">
      {cellGroup.map((cell) => (
        <Cell
          x={cell.x}
          y={cell.y}
          key={cell.id}
          mouseover={mouseover}
          mouseout={mouseout}
          click={click}
          status={cell.status}
          boardKey={boardKey}
          board={board}
        />
      ))}
    </div>
  ));

  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
      <PlayerHeader title={`${playerName}'s board`} />
      {renderedBoard}
    </Col>
  );
}

Board.propTypes = propTypes;
Board.defaultProps = defaultProps;

export default React.memo(Board);
