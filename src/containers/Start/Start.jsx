import React from 'react';
// Redux setup
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Lodash utilities
// eslint-disable-next-line import/no-extraneous-dependencies
import every from 'lodash/every';
import chunk from 'lodash/chunk';
// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Redux actions
import { changePlayerName, updateCellState } from '../../redux/actions';
// Custom components
import Board from '../../components/Board/Board';
import PlayerForm from '../../components/PlayerForm/PlayerForm';

const propTypes = {
  board: PropTypes.objectOf(PropTypes.array).isRequired,
  playerData: PropTypes.objectOf(PropTypes.object).isRequired,
  changePlayerName: PropTypes.func.isRequired,
};

function Start(props) {
  const { board, playerData } = props;

  const changeNameHandler = (event) => {
    props.changePlayerName(event.value);
  };

  const mouseOverCellHandler = (boardKey, boardData, x, y) => {
    // Checking the data for the next ship to positioning
    const currentShip = playerData.ships.find((ship) => {
      if (ship.quantity > 0) {
        return ship;
      }
      return null;
    });
    // If there are not more ships available then exit the function
    if (!currentShip) {
      return;
    }
    // Filtering of the selected cells
    const selectedCells = boardData
      .flat()
      .filter((cell) => cell.y === y && cell.x >= x && cell.x <= x + currentShip.size - 1);
    // Checking if there is space available and all cells are free
    if (!every(selectedCells, ['status', 'free']) || selectedCells.length < currentShip.size) {
      console.log("Can't position current ship here");
      return;
    }
    console.log('Can position current ship here');
    // Creation of the new bidimensional array with the hovered cells actives
    let newBoard = boardData.flat().map((cell) => ({
      ...cell,
      status:
        cell.y === y && cell.x >= x && cell.x <= x + currentShip.size - 1 ? 'occupied' : 'free',
      occupiedBy:
        cell.y === y && cell.x >= x && cell.x <= x + currentShip.size - 1
          ? currentShip.name
          : 'water',
    }));
    newBoard = chunk(newBoard, 10);
    props.updateCellState(boardKey, newBoard);
  };

  const positionShipHandler = (boardKey, boardData, x, y) => {};

  return (
    <Container className="h-100">
      <Row className="h-100 d-flex align-items-center">
        <Board
          board={board}
          mouseover={mouseOverCellHandler}
          click={positionShipHandler}
          playerName={`${playerData.name}'s board`}
          playableBoard
        />
        <PlayerForm change={changeNameHandler} />
      </Row>
    </Container>
  );
}

Start.propTypes = propTypes;

const mapStateToProps = (state) => ({
  board: state.board,
  playerData: state.playersData.playerData,
});

export default connect(mapStateToProps, { changePlayerName, updateCellState })(Start);
