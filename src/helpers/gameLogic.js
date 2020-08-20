export const getCurrentShip = (playerShips) => playerShips.find((ship) => ship.quantity > 0);

export const getSelectedCells = (board, x, y, shipSize) => {
  return board.flat().filter((cell) => cell.y === y && cell.x >= x && cell.x <= x + shipSize - 1);
};
