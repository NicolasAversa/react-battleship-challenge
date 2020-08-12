import { HOVER_SQUARE } from './actionTypes';

export const hoverSquare = (position, selectedBoard, shipSize) => {
  return { type: HOVER_SQUARE, payload: { position, selectedBoard, shipSize } };
};
