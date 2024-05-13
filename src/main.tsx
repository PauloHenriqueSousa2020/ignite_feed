// libs
import React from 'react'
import ReactDOM from 'react-dom/client'

// components
import App from './App.tsx'

// styles
import './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
