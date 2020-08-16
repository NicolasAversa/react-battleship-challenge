import React from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import { updateCellState } from '../../redux/actions';
import Board from '../../components/Board/Board';

function Game(props) {
  const { board, updateCellState } = props;

  const clickCellHandler = (selectedBoard, x, y) => {
    const newBoard = selectedBoard.map((cellGroup) => {
      return cellGroup.map((cell) => {
        return {
          ...cell,
          status: cell.y === y && cell.x >= x && cell.x <= x + 3 ? 'occupied' : 'free',
        };
      });
    });

    console.log(newBoard);
    updateCellState('playerBoard', newBoard);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1>BATTLESHIP</h1>
        </Col>
        <PlayerHeader title="Player board" />
        <PlayerHeader title="CPU board" />
        <Board board={board} playableBoard click={clickCellHandler} />
        <Board board={board} click={clickCellHandler} />
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({ board: state.board });

export default connect(mapStateToProps, { updateCellState })(Game);
