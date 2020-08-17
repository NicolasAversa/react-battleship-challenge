import { CLICK_CELL, CHANGE_PLAYER_NAME } from './actionTypes';

export const updateCellState = (selectedBoard, newStateData) => ({
  type: CLICK_CELL,
  payload: { selectedBoard, newStateData },
});

export const changePlayerName = (newName) => ({
  type: CHANGE_PLAYER_NAME,
  payload: { newName },
});
