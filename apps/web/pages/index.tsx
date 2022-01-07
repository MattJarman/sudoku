import Board from '../components/sudoku/board'

const Web = () => {
  return (
    <div className="flex justify-center mt-12">
      <Board
        board={
          '000900003340010600056400008132658000090743060064291800020080319000020080080009450'
        }
      />
    </div>
  )
}

export default Web
