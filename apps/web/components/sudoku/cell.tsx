interface CellProps {
  value: number
  className?: string
}

// TODO: Add positions for cell in props, as well as an on change handler
const Cell = ({ value, className }: CellProps) => {
  // const [number, setNumber] = useState(value)

  return <div className={className}>{value}</div>
}

export default Cell
