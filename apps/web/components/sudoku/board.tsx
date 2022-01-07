import Cell from './cell'
import { createBoard, solve } from 'sudoku'
import { classNames } from '../../lib/utils'

interface BoardProps {
  board: string
}

const Board = ({ board }: BoardProps) => {
  const grid = createBoard(board)
  const [solved, solvedBoard] = solve(grid)

  return (
    <table>
      <tbody className="border-4 border-black">
        {solvedBoard.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {row.map((value, cellIndex) => (
              <td
                className={classNames(
                  cellIndex > 0 ? 'border-l border-gray-200' : '',
                  rowIndex > 0 ? 'border-t border-gray-200' : '',
                  'px-2'
                )}
                key={`cell-${rowIndex}-${cellIndex}`}
              >
                <Cell className="text-2xl" value={value} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Board
