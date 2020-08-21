import { UPDATE_PLAYER_NAME, UPDATE_SHIP_QUANTITY } from '../actionTypes';

const initialState = {
  player: {
    name: 'Player',
    ships: [
      { name: 'Carrier', size: 4, quantity: 1 },
      { name: 'Submarine', size: 2, quantity: 1 },
      { name: 'Cruiser', size: 3, quantity: 3 },
    ],
  },
  cpu: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYER_NAME: {
      const { newName } = action.payload;
      return { ...state, player: { ...state.player, name: newName } };
    }
    case UPDATE_SHIP_QUANTITY: {
      const { newShips } = action.payload;
      return {
        ...state,
        player: { ...state.player, ships: newShips },
      };
    }
    default:
      return state;
  }
}
