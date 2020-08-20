import { UPDATE_BOARD } from '../actionTypes';
import fillBoard from '../utilities/fillBoard';

const initialState = {
  player: fillBoard(10, 10),
  cpu: fillBoard(10, 10),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOARD: {
      const { boardKey, newBoard } = action.payload;
      return { ...state, [boardKey]: newBoard };
    }
    default:
      return state;
  }
}
