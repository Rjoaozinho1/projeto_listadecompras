import ReactDOM from 'react-dom/client'
import './styles/global.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MainRoutes></MainRoutes>
  </BrowserRouter>
)
