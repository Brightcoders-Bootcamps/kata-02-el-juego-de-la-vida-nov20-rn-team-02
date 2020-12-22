import Produce from 'immer';

const no_rows = 10;
const no_cols = 10;
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];
export const initialGrid = () => {
  const rows = [];
  for (let i = 0; i < no_rows; i++) {
    rows.push(Array.from(Array(no_cols), () => 0));
  }

  return rows;
};

export const GenerateNewGrid = (grid, row_index, col_index) => {
  const newState = Produce(grid, (newGrid) => {
    newGrid[row_index][col_index] = grid[row_index][col_index] ? 0 : 1;
  });
  return newState;
};

export const startGame = (gameRef, setGrid) => {
  if (!gameRef) {
    return;
  }

  setGrid((g) => {
    return Produce(g, (gridCopy) => {
      for (let i = 0; i < no_rows; i++) {
        for (let k = 0; k < no_cols; k++) {
          let neighbors = 0;
          operations.forEach(([x, y]) => {
            const newI = i + x;
            const newK = k + y;
            if (newI >= 0 && newI < no_rows && newK >= 0 && newK < no_cols) {
              neighbors += g[newI][newK];
            }
          });

          if (neighbors < 2 || neighbors > 3) {
            gridCopy[i][k] = 0;
          } else if (g[i][k] === 0 && neighbors === 3) {
            gridCopy[i][k] = 1;
          }
        }
      }
    });
  });
};
