import { UPDATE_BOARD, UPDATE_PLAYER_NAME, UPDATE_SHIP_QUANTITY } from './actionTypes';

export const updateBoard = (boardKey, newBoard) => ({
  type: UPDATE_BOARD,
  payload: { boardKey, newBoard },
});

export const updatePlayerName = (newName) => ({
  type: UPDATE_PLAYER_NAME,
  payload: { newName },
});

export const updateShipQuantity = (newShips) => ({
  type: UPDATE_SHIP_QUANTITY,
  payload: { newShips },
});
