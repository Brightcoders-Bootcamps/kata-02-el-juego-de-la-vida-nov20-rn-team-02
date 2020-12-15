const no_rows = 10;
const no_cols = 10;

export const initialGrid = () => {
  const rows = [];
  for (let i = 0; i < no_rows; i++) {
    rows.push(Array.from(Array(no_cols), () => 0));
  }

  return rows;
};
