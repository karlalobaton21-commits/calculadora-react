/** boton reutilizable**/

function Button({ label, onClick, variant = 'number', wide = false }) {
  return (
    <button
      type="button"
      className={`calc-btn calc-btn--${variant} ${wide ? 'calc-btn--wide' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
