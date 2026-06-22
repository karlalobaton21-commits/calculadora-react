import Button from './Button.jsx'

const BUTTONS = [
  { label: 'AC', type: 'clear', variant: 'function' },
  { label: '⌫', type: 'backspace', variant: 'function' },
  { label: '±', type: 'sign', variant: 'function' },
  { label: '÷', type: 'operator', value: '÷', variant: 'operator' },

  { label: '7', type: 'number', value: '7', variant: 'number' },
  { label: '8', type: 'number', value: '8', variant: 'number' },
  { label: '9', type: 'number', value: '9', variant: 'number' },
  { label: '×', type: 'operator', value: '×', variant: 'operator' },

  { label: '4', type: 'number', value: '4', variant: 'number' },
  { label: '5', type: 'number', value: '5', variant: 'number' },
  { label: '6', type: 'number', value: '6', variant: 'number' },
  { label: '-', type: 'operator', value: '-', variant: 'operator' },

  { label: '1', type: 'number', value: '1', variant: 'number' },
  { label: '2', type: 'number', value: '2', variant: 'number' },
  { label: '3', type: 'number', value: '3', variant: 'number' },
  { label: '+', type: 'operator', value: '+', variant: 'operator' },

  { label: '0', type: 'number', value: '0', variant: 'number', wide: true },
  { label: '.', type: 'decimal', variant: 'number' },
  { label: '=', type: 'equals', variant: 'equals' },
]

function ButtonGrid({ onPress }) {
  return (
    <div className="calc-grid">
      {BUTTONS.map((btn) => (
        <Button
          key={btn.label}
          label={btn.label}
          variant={btn.variant}
          wide={btn.wide}
          onClick={() => onPress(btn)}
        />
      ))}
    </div>
  )
}

export default ButtonGrid
