import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { updateBoard } from '../../redux/actions';
import Board from '../../components/Board/Board';

const propTypes = {
  playerBoard: PropTypes.arrayOf(PropTypes.array).isRequired,
  cpuBoard: PropTypes.arrayOf(PropTypes.array).isRequired,
  playerName: PropTypes.string.isRequired,
  updateBoard: PropTypes.func.isRequired,
};

function Game(props) {
  const { playerBoard, cpuBoard, playerName } = props;

  const clickCellHandler = (boardKey, boardData, x, y) => {
    const newBoard = boardData.map((cellGroup) =>
      cellGroup.map((cell) => ({
        ...cell,
        status:
          (cell.y === y && cell.x >= x && cell.x <= x + 3) || cell.status === 'occupied'
            ? 'occupied'
            : 'free',
      })),
    );

    props.updateBoard(boardKey, newBoard);
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>BATTLESHIP</h1>
        </Col>
        <Board board={playerBoard} playableBoard playerName={playerName} click={clickCellHandler} />
        <Board board={cpuBoard} playerName="CPU" click={clickCellHandler} />
      </Row>
    </Container>
  );
}

Game.propTypes = propTypes;
const mapStateToProps = (state) => ({
  playerBoard: state.boards.player,
  cpuBoard: state.boards.cpu,
  playerName: state.players.player.name,
});

export default connect(mapStateToProps, { updateBoard })(Game);
