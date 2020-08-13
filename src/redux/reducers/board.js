import { HOVER_SQUARE } from '../actionTypes';

const fillBoard = (horizontalTiles, verticalTiles) => {
  const array = [];
  for (let i = 0; i <= horizontalTiles; i += 1) {
    array[i] = [];
    for (let j = 0; j <= verticalTiles; j += 1) {
      array[i][j] = {
        id: i.toString() + j.toString(),
        x: i,
        y: j,
        status: 'free',
        occupiedBy: '',
        hover: false,
      };
    }
  }
  return array.flat();
};

const initialState = {
  playerBoard: fillBoard(10, 10),
  cpuBoard: fillBoard(10, 10),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HOVER_SQUARE:
      return { ...state, [action.payload.selectedBoard]: [{ id: '00', x: 1, y: 1 }] };
    default:
      return state;
  }
}
