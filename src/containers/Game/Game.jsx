import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { updateCellState } from '../../redux/actions';
import Board from '../../components/Board/Board';

const propTypes = {
  board: PropTypes.objectOf(PropTypes.array).isRequired,
  updateCellState: PropTypes.func.isRequired,
};

function Game(props) {
  const { board, updateCellState } = props;

  const clickCellHandler = (selectedBoard, x, y) => {
    const newBoard = selectedBoard.map((cellGroup) =>
      cellGroup.map((cell) => ({
        ...cell,
        status: cell.y === y && cell.x >= x && cell.x <= x + 3 ? 'occupied' : 'free',
      })),
    );

    updateCellState('playerBoard', newBoard);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1>BATTLESHIP</h1>
        </Col>
        <Board board={board} playableBoard click={clickCellHandler} />
        <Board board={board} click={clickCellHandler} />
      </Row>
    </Container>
  );
}

Game.propTypes = propTypes;
const mapStateToProps = (state) => ({ board: state.board });

export default connect(mapStateToProps, { updateCellState })(Game);
