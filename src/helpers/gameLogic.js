import every from 'lodash/every';
import chunk from 'lodash/chunk';

export const getCurrentShip = (playerShips) => playerShips.find((ship) => ship.quantity > 0);

export const getSelectedCells = (board, x, y, shipSize) =>
  board.flat().filter((cell) => cell.y === y && cell.x >= x && cell.x <= x + shipSize - 1);

export const isEveryCellFree = (cells, shipSize) => {
  if (!every(cells, ['status', 'free']) || cells.length < shipSize) {
    return false;
  }
  return true;
};

export const setCellsAsSelected = (board, x, y, ship) => {
  const newBoard = board.flat().map((cell) => ({
    ...cell,
    status: cell.y === y && cell.x >= x && cell.x <= x + ship.size - 1 ? 'selected' : 'free',
  }));
  return chunk(newBoard, 10);
};

export const setCellsAsOccupied = (board, x, y, ship) => {
  const newBoard = board.flat().map((cell) => ({
    ...cell,
    status: cell.y === y && cell.x >= x && cell.x <= x + ship.size - 1 ? 'occupied' : cell.status,
    occupiedBy:
      cell.y === y && cell.x >= x && cell.x <= x + ship.size - 1 ? ship.name : cell.occupiedBy,
  }));
  return chunk(newBoard, 10);
};

export const decreaseShipQuantity = (playerShips, shipName) => {
  const shipIndex = playerShips.findIndex((ship) => ship.name === shipName);
  const newShips = [...playerShips];
  newShips[shipIndex].quantity -= 1;
  return newShips;
};
