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
  const { board } = props;

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

    props.updateCellState(boardKey, newBoard);
  };

  return (
    <Container>
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
