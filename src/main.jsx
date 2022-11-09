import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataContext } from './components/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
)
