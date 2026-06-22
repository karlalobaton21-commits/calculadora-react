import { useState } from 'react'
import Display from './Display.jsx'
import ButtonGrid from './ButtonGrid.jsx'
import { calculate, formatResult } from '../utils/calculate.js'
import './Calculator.css'

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  function inputDigit(digit) {
    if (waitingForOperand) {
      setDisplayValue(digit)
      setWaitingForOperand(false)
      return
    }
    setDisplayValue(displayValue === '0' ? digit : displayValue + digit)
  }

  function inputDecimal() {
    if (waitingForOperand) {
      setDisplayValue('0.')
      setWaitingForOperand(false)
      return
    }
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.')
    }
  }

  function toggleSign() {
    setDisplayValue((prev) =>
      prev.startsWith('-') ? prev.slice(1) : prev === '0' ? prev : '-' + prev,
    )
  }

  function backspace() {
    if (displayValue.length <= 1 || (displayValue.length === 2 && displayValue.startsWith('-'))) {
      setDisplayValue('0')
      return
    }
    setDisplayValue(displayValue.slice(0, -1))
  }

  function clearAll() {
    setDisplayValue('0')
    setPreviousValue(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  // El usuario pulsó +, -, × o ÷
  function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operator) {
 
      const result = calculate(operator, previousValue, inputValue)
      setPreviousValue(result === 'Error' ? 0 : result)
      setDisplayValue(formatResult(result))
    }

    setWaitingForOperand(true)
    setOperator(nextOperator)
  }

  // El usuario pulsó "="
  function handleEquals() {
    if (operator === null || previousValue === null) return

    const inputValue = parseFloat(displayValue)
    const result = calculate(operator, previousValue, inputValue)

    setDisplayValue(formatResult(result))
    setPreviousValue(null)
    setOperator(null)
    setWaitingForOperand(true)
  }

  function handlePress({ type, value }) {
    switch (type) {
      case 'number':
        inputDigit(value)
        break
      case 'decimal':
        inputDecimal()
        break
      case 'operator':
        handleOperator(value)
        break
      case 'equals':
        handleEquals()
        break
      case 'clear':
        clearAll()
        break
      case 'backspace':
        backspace()
        break
      case 'sign':
        toggleSign()
        break
      default:
        break
    }
  }

// Texto pequeño arriba de la pantalla. Antes solo mostraba "12 +".
  // Ahora, si ya empezaste a escribir el segundo número, lo agregamos
  // también: "12 + 5". Mientras "waitingForOperand" sea true (recién
  // pulsaste el operador, todavía no escribes nada), no hay segundo
  // número que mostrar.
  const expression = operator
    ? `${formatResult(previousValue)} ${operator} ${waitingForOperand ? '' : displayValue}`
    : ''

  // Número grande de abajo. Mientras hay una operación pendiente Y ya
  // escribiste el segundo número, en vez de mostrar lo que tecleaste
  // mostramos el RESULTADO calculado en ese instante (vista previa en
  // vivo). En cualquier otro caso (escribiendo el primer número, o ya
  // sin operación pendiente porque pulsaste "="), se muestra tal cual
  // lo que hay en displayValue.
  const bigValue =
    operator && !waitingForOperand
      ? formatResult(calculate(operator, previousValue, parseFloat(displayValue)))
      : displayValue

  return (
    <div className="calculator">
      <Display value={bigValue} expression={expression} />
      <ButtonGrid onPress={handlePress} />
    </div>
  )
}

export default Calculator
