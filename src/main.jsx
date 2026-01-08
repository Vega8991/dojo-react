import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Saludo from './components/saludo'
import Perfil from './components/Perfil'
import Tarjeta from './components/Tarjeta'
import BotonAlerta from './components/BotonAlerta'
import InputConsola from './components/InputConsola'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saludo nombre="Manolo"/>
    <Perfil nombre="Manolo" edad="21" profesion="Desarrollador frontend"/>
    <Tarjeta titulo="tarjeta 1" contenido="Este contenido es de la tarea 1 act 3"/>
    <BotonAlerta />
    <InputConsola />
  </StrictMode>,
)
