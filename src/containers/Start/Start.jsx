import React from 'react';
// Redux setup
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Redux actions
import { updatePlayerName, updateBoard, updateShipQuantity } from '../../redux/actions';
// Helper actions
import {
  getCurrentShip,
  getSelectedCells,
  isEveryCellFree,
  setCellsAsSelected,
  setCellsAsOccupied,
  decreaseShipQuantity,
} from '../../helpers/gameLogic';
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
  updateShipQuantity: PropTypes.func.isRequired,
  updateBoard: PropTypes.func.isRequired,
};

function Start(props) {
  const { playerBoard, playerName, playerInformation } = props;

  const nameChangeHandler = (event) => {
    props.updatePlayerName(event.value);
  };

  const mouseOverCellHandler = (boardKey, board, x, y) => {
    const ship = getCurrentShip(playerInformation.ships);
    if (!ship) {
      return;
    }
    const selectedCells = getSelectedCells(board, x, y, ship.size);
    if (!isEveryCellFree(selectedCells, ship.size)) {
      return;
    }
    const newBoard = setCellsAsSelected(board, x, y, ship);
    props.updateBoard(boardKey, newBoard);
  };

  const clickCellHandler = (boardKey, board, x, y) => {
    const ship = getCurrentShip(playerInformation.ships);
    if (!ship) {
      return;
    }

    const newBoard = setCellsAsOccupied(board, x, y, ship.size);
    const newShips = decreaseShipQuantity(playerInformation.ships, ship.name);

    props.updateShipQuantity(newShips);
    props.updateBoard(boardKey, newBoard);
  };

  return (
    <Container className="h-100">
      <Row className="h-100 d-flex align-items-center">
        <Board
          board={playerBoard}
          mouseover={mouseOverCellHandler}
          click={clickCellHandler}
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

export default connect(mapStateToProps, { updatePlayerName, updateBoard, updateShipQuantity })(
  Start,
);
