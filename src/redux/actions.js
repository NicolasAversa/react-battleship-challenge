import { CLICK_CELL } from './actionTypes';

export const updateCellState = (selectedBoard, newStateData) => ({
  type: CLICK_CELL,
  payload: { selectedBoard, newStateData },
});
