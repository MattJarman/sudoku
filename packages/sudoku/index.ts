const SUDOKU_LENGTH = 9
const SUDOKU_GRID_LENGTH = 3

export const solve = (grid: number[][], row = 0, column = 0): Array<boolean | number[][]> => {
  if (row === SUDOKU_LENGTH - 1 && column === SUDOKU_LENGTH) {
    return [true, grid]
  }

  if (column === SUDOKU_LENGTH) {
    row++
    column = 0
  }

  if (grid[row][column] !== 0) {
    return solve(grid, row, column + 1)
  }

  for (let i = 1; i <= SUDOKU_LENGTH; i++) {
    if (isValid(grid, row, column, i)) {
      grid[row][column] = i

      const [solved] = solve(grid, row, column + 1)
      if (solved) {
        return [true, grid]
      }
    }

    grid[row][column] = 0
  }

  return [false, grid]
}

export const createGrid = (sudokuString: string): number[][] => {
  const grid = Array.from(new Array(SUDOKU_LENGTH), () => [])
  const rows = sudokuString.split('')

  for (const [index, value] of rows.entries()) {
    grid[Math.floor(index / 9)].push(parseInt(value))
  }

  return grid
}

export const isValid = (grid: number[][], row: number, column: number, number: number): boolean => {
  for (let i = 0; i < SUDOKU_LENGTH; i++) {
    if (grid[row][i] === number || grid[i][column] === number) {
      return false
    }
  }

  const startRow = row - row % SUDOKU_GRID_LENGTH
  const startColumn = column - column % SUDOKU_GRID_LENGTH

  for (let i = 0; i < SUDOKU_GRID_LENGTH; i++) {
    for (let j = 0; j < SUDOKU_GRID_LENGTH; j++) {
      if (grid[i + startRow][j + startColumn] === number) {
        return false
      }
    }
  }

  return true
}
