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
      <tbody className="shadow-md rounded-md">
        {solvedBoard.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {row.map((value, cellIndex) => (
              <td
                className={classNames(
                  cellIndex > 0 ? 'border-l border-gray-200' : '',
                  rowIndex > 0 ? 'border-t border-gray-200' : '',
                  'w-16 h-16 text-center',
                )}
                key={`cell-${rowIndex}-${cellIndex}`}
              >
                <Cell className="cursor-pointer text-3xl text-blue-500" value={value} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Board
