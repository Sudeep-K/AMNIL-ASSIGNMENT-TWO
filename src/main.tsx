import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import  { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
