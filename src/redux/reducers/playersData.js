import { CHANGE_PLAYER_NAME } from '../actionTypes';

const initialState = {
  playerData: {
    name: 'Player',
    playing: true,
    ships: [
      { name: 'Carrier', size: 4, quanitity: 1 },
      { name: 'Submarine', size: 2, quanitity: 1 },
      { name: 'Cruiser', size: 3, quanitity: 3 },
    ],
  },
  cpuData: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PLAYER_NAME: {
      const { newName } = action.payload;
      return { ...state, playerData: { ...state.playerData, name: newName } };
    }
    default:
      return state;
  }
}
