import { CHANGE_PLAYER_NAME, SHIP_POSITIONING } from '../actionTypes';

const initialState = {
  playerData: {
    name: 'Player',
    ships: [
      { name: 'Carrier', size: 4, quantity: 0 },
      { name: 'Submarine', size: 2, quantity: 1 },
      { name: 'Cruiser', size: 3, quantity: 3 },
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
    case SHIP_POSITIONING: {
      return {};
    }
    default:
      return state;
  }
}
