const fillBoard = (horizontalTiles, verticalTiles) => {
  const positionsArray = [];
  for (let i = 0; i <= horizontalTiles - 1; i += 1) {
    positionsArray[i] = [];
    for (let j = 0; j <= verticalTiles - 1; j += 1) {
      positionsArray[i][j] = {
        id: i.toString() + j.toString(),
        x: i,
        y: j,
        status: 'free',
        occupiedBy: 'water',
        hover: false,
      };
    }
  }
  return positionsArray;
};

export default fillBoard;
