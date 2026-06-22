/**
 * utils/calculate.js
 * ---------------------------------------------------------
 * Aquí vive SOLO la matemática. Ninguna línea de este archivo
 * sabe que existe un botón o una pantalla: recibe números y
 * devuelve números (o el texto "Error"). Esto se llama separar
 * la "lógica de negocio" de la interfaz, y es justo lo que pide
 * la prueba cuando habla de "código limpio y modular".
 *
 * Ventaja práctica: puedes probar esta función con Node, sin
 * abrir el navegador, y reutilizarla en cualquier otro proyecto.
 */

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
