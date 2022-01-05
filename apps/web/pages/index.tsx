import { Button } from 'ui'
import { createGrid, solve } from 'sudoku'

const Web = () => {
  const grid = createGrid('000900003340010600056400008132658000090743060064291800020080319000020080080009450')
  const [solved, sudoku] = solve(grid)
  console.log(solved, sudoku)
  
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  )
}

export default Web
