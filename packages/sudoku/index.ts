const SUDOKU_BOARD_LENGTH = 9
const SUDOKU_GRID_LENGTH = 3

export type Solution = [boolean, number[][]]

export const solve = (board: number[][]): Solution => {
  const empty = findEmpty(board)
  if (!empty) {
    return [true, board]
  }

  const [row, column] = empty
  for (let i = 1; i <= board.length; i++) {
    if (isValid(board, row, column, i)) {
      board[row][column] = i

      const [solved] = solve(board)
      if (solved) {
        return [true, board]
      }

      board[row][column] = 0
    }
  }

  return [false, board]
}

export const createBoard = (sudokuString: string): number[][] => {
  const board = Array.from(new Array(SUDOKU_BOARD_LENGTH), () => [])
  const rows = sudokuString.split('')

  for (const [index, value] of rows.entries()) {
    board[Math.floor(index / 9)].push(parseInt(value))
  }

  return board
}

export const isValid = (
  board: number[][],
  row: number,
  column: number,
  number: number
): boolean => {
  for (let i = 0; i < SUDOKU_BOARD_LENGTH; i++) {
    if (board[row][i] === number || board[i][column] === number) {
      return false
    }
  }

  const startRow = row - (row % SUDOKU_GRID_LENGTH)
  const startColumn = column - (column % SUDOKU_GRID_LENGTH)

  for (let i = 0; i < SUDOKU_GRID_LENGTH; i++) {
    for (let j = 0; j < SUDOKU_GRID_LENGTH; j++) {
      if (board[i + startRow][j + startColumn] === number) {
        return false
      }
    }
  }

  return true
}

const findEmpty = (board: number[][]): number[] | false => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        return [i, j]
      }
    }
  }

  return false
}
