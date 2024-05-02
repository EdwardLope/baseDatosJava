import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { consumirDatos } from './assets/services/servicioSore'

function App() {
 consumirDatos().then(function(respuesta){
  console.log(respuesta)
 })
}

export default App