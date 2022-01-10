import Cell from './cell'
import { createBoard, solve } from 'sudoku'
import { classNames } from '../../lib/utils'

interface BoardProps {
  sudoku: string
}

const Board = ({ sudoku }: BoardProps) => {
  const board = createBoard(sudoku)
  const [solved, solvedBoard] = solve(board)

  if (!solved) {
    return <p>Failed to solve provided Sudoku!</p>
  }

  return (
    <table>
      <tbody className="shadow-md border-4 border-gray-200">
        {solvedBoard.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {row.map((value, cellIndex) => (
              <td
                className={classNames(
                  rowIndex % 3 === 0 ? 'border-t-4' : '',
                  cellIndex % 3 === 0 ? 'border-l-4' : '',
                  'w-16 h-16 text-center border'
                )}
                key={`cell-${rowIndex}-${cellIndex}`}
              >
                <Cell
                  className="w-full h-full flex items-center justify-center cursor-pointer text-3xl text-blue-500"
                  value={value}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Board
