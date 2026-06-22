
function Display({ value, expression }) {
  return (
    <div className="calc-display">
      <div className="calc-display__expression">{expression}</div>
      <div className="calc-display__value">{value}</div>
    </div>
  )
}

export default Display
