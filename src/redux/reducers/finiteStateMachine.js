const initialState = {
  playerState: {},
  cpuState: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HOVER_SQUARE':
      return {};
    default:
      return state;
  }
}
