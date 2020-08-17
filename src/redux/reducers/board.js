import { CLICK_CELL } from '../actionTypes';
import fillBoard from '../utilities/fillBoard';

const initialState = {
  playerBoard: fillBoard(10, 10),
  cpuBoard: fillBoard(10, 10),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_CELL: {
      const { selectedBoard, newStateData } = action.payload;
      return { ...state, [selectedBoard]: newStateData };
    }
    default:
      return state;
  }
}
