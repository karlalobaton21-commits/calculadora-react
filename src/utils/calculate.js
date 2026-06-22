export function calculate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '×':
      return a * b
    case '÷':
      return b === 0 ? 'Error' : a / b
    default:
      return b
  }
}

export function formatResult(value) {
  if (value === 'Error') return 'Error'

  const rounded = Math.round((value + Number.EPSILON) * 1e10) / 1e10

  // Si el número es muy largo, lo mostramos en notación científica
  // para que no se desborde de la pantalla).
  const asString = String(rounded)
  if (asString.replace('-', '').replace('.', '').length > 12) {
    return rounded.toExponential(5)
  }
  return asString
}
