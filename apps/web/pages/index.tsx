import Board from '../components/sudoku/board'

const Web = () => {
  // TODO: Generate from sudoku package
  const sudoku = '000900003340010600056400008132658000090743060064291800020080319000020080080009450'

  return (
    <div className="flex justify-center mt-12">
      <Board
        sudoku={sudoku}
      />
    </div>
  )
}

export default Web
