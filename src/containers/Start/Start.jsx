import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  isEveryCellSelected,
  setCellsAsSelected,
  cleanSelectedCells,
  setCellsAsOccupied,
  canPutMoreShips,
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
  const [orientation, setOrientation] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const history = useHistory();

  const nameChangeHandler = (event) => {
    props.updatePlayerName(event.value);
  };

  const toggleHandler = (event) => {
    setOrientation(event.checked);
  };

  const clickStartHandler = () => {
    history.push('/game');
  };

  const mouseOverCellHandler = (boardKey, board, x, y) => {
    const ship = getCurrentShip(playerInformation.ships);
    if (!ship) {
      return;
    }

    const selectedCells = getSelectedCells(board, x, y, ship.size, orientation);
    if (!isEveryCellFree(selectedCells, ship.size)) {
      return;
    }

    const newBoard = setCellsAsSelected(board, x, y, ship, orientation);
    props.updateBoard(boardKey, newBoard);
  };

  const mouseOutCellHandler = (boardKey, board) => {
    const newBoard = cleanSelectedCells(board);
    props.updateBoard(boardKey, newBoard);
  };

  const clickCellHandler = (boardKey, board, x, y) => {
    const ship = getCurrentShip(playerInformation.ships);
    if (!ship) {
      return;
    }

    const selectedCells = getSelectedCells(board, x, y, ship.size, orientation);
    if (!isEveryCellSelected(selectedCells, ship.size)) {
      return;
    }

    const newBoard = setCellsAsOccupied(board, x, y, ship, orientation);
    const newShips = decreaseShipQuantity(playerInformation.ships, ship.name);
    if (!canPutMoreShips(playerInformation.ships)) {
      setCanPlay(true);
    }
    props.updateShipQuantity(newShips);
    props.updateBoard(boardKey, newBoard);
  };

  return (
    <Container className="h-100">
      <Row className="h-100 d-flex align-items-center">
        <Board
          board={playerBoard}
          mouseover={mouseOverCellHandler}
          mouseout={mouseOutCellHandler}
          click={clickCellHandler}
          playerName={playerName}
          playableBoard
        />
        <PlayerForm
          click={clickStartHandler}
          change={nameChangeHandler}
          toggle={toggleHandler}
          canPlay={canPlay}
        />
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
  Start
);
