import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPre,
  setIsValidPre,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>


      {isValidPre ? (
        <ControlPresupuesto 
          gastos = { gastos }
          setGastos = { setGastos }
          presupuesto = { presupuesto }
          setPresupuesto = { setPresupuesto }
          setIsValidPre = { setIsValidPre }
        />
      ): (
          <NuevoPresupuesto 
              presupuesto = { presupuesto }
              setPresupuesto = { setPresupuesto }
              setIsValidPre = { setIsValidPre }
        />
      )}


    </header>
  )
}

export default Header
