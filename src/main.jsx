import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorPeliculas } from './buscadorPeliculas'
import './styles/styleSearchMovies.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPeliculas />
  </React.StrictMode>,
)
