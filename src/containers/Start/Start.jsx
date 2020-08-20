import React from 'react';
// Redux setup
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Lodash utilities
import every from 'lodash/every';
import chunk from 'lodash/chunk';
// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Redux actions
import { updatePlayerName, updateCellState } from '../../redux/actions';
// Helper actions
import { getCurrentShip, getSelectedCells } from '../../helpers/gameLogic';
// Custom components
import Board from '../../components/Board/Board';
import PlayerForm from '../../components/PlayerForm/PlayerForm';

const propTypes = {
  playerBoard: PropTypes.arrayOf(PropTypes.array).isRequired,
  playerName: PropTypes.string.isRequired,
  playerInformation: PropTypes.shape({
    name: PropTypes.string,
    ships: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  updatePlayerName: PropTypes.func.isRequired,
  updateCellState: PropTypes.func.isRequired,
};

function Start(props) {
  const { playerBoard, playerName, playerInformation } = props;

  const nameChangeHandler = (event) => {
    props.updatePlayerName(event.value);
  };

  const mouseOverCellHandler = (boardKey, board, x, y) => {
    // Checking the data for the next ship to positioning
    const currentShip = getCurrentShip(playerInformation.ships);
    // If there are not more ships available then exit the function
    if (!currentShip) {
      return;
    }
    // Filtering of the selected cells
    const selectedCells = getSelectedCells(board, x, y, currentShip.size);
    // Checking if there is space available and all cells are free
    if (!every(selectedCells, ['status', 'free']) || selectedCells.length < currentShip.size) {
      console.log("Can't position current ship here");
      return;
    }
    console.log('Can position current ship here');
    // Creation of the new bidimensional array with the hovered cells actives
    let newBoard = board.flat().map((cell) => ({
      ...cell,
      status:
        cell.y === y && cell.x >= x && cell.x <= x + currentShip.size - 1 ? 'selected' : 'free',
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
          board={playerBoard}
          mouseover={mouseOverCellHandler}
          click={positionShipHandler}
          playerName={playerName}
          playableBoard
        />
        <PlayerForm change={nameChangeHandler} />
      </Row>
    </Container>
  );
}

Start.propTypes = propTypes;

const mapStateToProps = (state) => ({
  playerBoard: state.boards.player,
  playerInformation: state.players.player,
  playerName: state.players.player.name,
});

export default connect(mapStateToProps, { updatePlayerName, updateCellState })(Start);
