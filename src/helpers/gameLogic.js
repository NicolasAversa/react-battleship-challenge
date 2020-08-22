import every from 'lodash/every';
import chunk from 'lodash/chunk';

export const getCurrentShip = (playerShips) => playerShips.find((ship) => ship.quantity > 0);

export const getSelectedCells = (board, x, y, shipSize, hasHorizontalOrientation) => {
  if (hasHorizontalOrientation) {
    return board.flat().filter((cell) => cell.x === x && cell.y >= y && cell.y <= y + shipSize - 1);
  }
  return board.flat().filter((cell) => cell.y === y && cell.x >= x && cell.x <= x + shipSize - 1);
};

export const isEveryCellFree = (cells, shipSize) => {
  if (!every(cells, ['status', 'free']) || cells.length < shipSize) {
    return false;
  }
  return true;
};

export const isEveryCellSelected = (cells, shipSize) => {
  if (!every(cells, ['status', 'selected']) || cells.length < shipSize) {
    return false;
  }
  return true;
};

export const cleanSelectedCells = (board) => {
  const newBoard = board.flat().map((cell) => ({
    ...cell,
    status: cell.status === 'occupied' ? cell.status : 'free',
  }));
  return chunk(newBoard, 10);
};

export const setCellsAsSelected = (board, x, y, ship, hasHorizontalOrientation) => {
  let newBoard;
  if (hasHorizontalOrientation) {
    newBoard = board.flat().map((cell) => ({
      ...cell,
      status:
        cell.x === x && cell.y >= y && cell.y <= y + ship.size - 1 && cell.status === 'free'
          ? 'selected'
          : cell.status,
    }));
  } else {
    newBoard = board.flat().map((cell) => ({
      ...cell,
      status:
        cell.y === y && cell.x >= x && cell.x <= x + ship.size - 1 && cell.status === 'free'
          ? 'selected'
          : cell.status,
    }));
  }

  return chunk(newBoard, 10);
};

export const setCellsAsOccupied = (board, x, y, ship, hasHorizontalOrientation) => {
  let newBoard;
  if (hasHorizontalOrientation) {
    newBoard = board.flat().map((cell) => ({
      ...cell,
      status: cell.x === x && cell.y >= y && cell.y <= y + ship.size - 1 ? 'occupied' : cell.status,
      occupiedBy:
        cell.x === x && cell.y >= y && cell.y <= y + ship.size - 1 ? cell.occupiedBy : ship.name,
    }));
  } else {
    newBoard = board.flat().map((cell) => ({
      ...cell,
      status: cell.y === y && cell.x >= x && cell.x <= x + ship.size - 1 ? 'occupied' : cell.status,
      occupiedBy:
        cell.y === y && cell.x >= x && cell.x <= x + ship.size - 1 ? cell.occupiedBy : ship.name,
    }));
  }
  return chunk(newBoard, 10);
};

export const canPutMoreShips = (playerShips) => {
  if (every(playerShips, ['quantity', 0])) {
    return false;
  }
  return true;
};

export const decreaseShipQuantity = (playerShips, shipName) => {
  const shipIndex = playerShips.findIndex((ship) => ship.name === shipName);
  const newShips = [...playerShips];
  newShips[shipIndex].quantity -= 1;
  return newShips;
};
