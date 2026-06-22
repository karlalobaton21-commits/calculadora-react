# Calculadora React

Calculadora web construida con React (hooks) + Vite

## Requisitos cumplidos

- [x] Suma, resta, multiplicación y división
- [x] Soporte para decimales (`.`) y signos positivos/negativos (`±`)
- [x] Botón de limpiado `AC` y botón de retroceso `⌫`
- [x] UI y lógica con React (hooks: `useState`)
- [x] Código modular: componentes reutilizables + lógica separada en `utils/`
- [x] README con instrucciones de instalación

## Instalar y ejecutar localmente

Necesitas tener [Node.js](https://nodejs.org/) instalado (versión 18 o superior).

```bash
# 1. Instalar dependencias
npm install
# 2. Levantar el servidor de desarrollo
npm run dev
```
Esto abrirá la app en `http://localhost:5173`.


## Estructura del proyecto
```
src/
├── components/
│   ├── Calculator.jsx     # Componente "inteligente": guarda el estado y la lógica
│   ├── Calculator.css     # Estilos del cuerpo, pantalla y botones
│   ├── Display.jsx        # Muestra el número actual y la operación pendiente
│   ├── ButtonGrid.jsx     # Genera los botones a partir de un arreglo de configuración
│   └── Button.jsx         # Botón genérico y reutilizable
├── utils/
│   └── calculate.js       # Matemática pura, sin nada de React
├── App.jsx                # Componente raíz
├── main.jsx               # Punto de entrada, monta React en el HTML
└── index.css              # Estilos globales / tokens de diseño
```

## Cómo subirlo a GitHub (requisito de control de versiones)

```bash
git init
git add .
git commit -m "Calculadora React - prueba técnica"
git branch -M main
git remote add origin <URL-REPOSITORIO>
git push -u origin main
```

