import React from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { hoverSquare } from '../../redux/actions';
import Board from '../../components/Board/Board';

function Game(props) {
  const { board, hoverSquare } = props;

  const handleClick = (selectedBoard, x, y) => {
    hoverSquare(11, 'playerBoard');
    let selectedPos = selectedBoard.filter((cell) => {
      return cell.x === x && cell.y === y;
    });

    const otherPoses = selectedBoard.filter((cell) => {
      return cell.y === y && cell.x >= x + 1;
    });

    selectedPos = selectedPos.concat(otherPoses);
  };
  console.log(board);
  return (
    <Container>
      <Row>
        <Board board={board} playableBoard click={handleClick} />
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({ board: state.board });

export default connect(mapStateToProps, { hoverSquare })(Game);