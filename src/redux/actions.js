import { UPDATE_BOARD, UPDATE_PLAYER_NAME } from './actionTypes';

export const updateCellState = (boardKey, newBoard) => ({
  type: UPDATE_BOARD,
  payload: { boardKey, newBoard },
});

export const updatePlayerName = (newName) => ({
  type: UPDATE_PLAYER_NAME,
  payload: { newName },
});
