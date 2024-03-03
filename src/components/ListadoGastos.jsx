import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  gastosFilter
}) => {
  return (
    <div className='listado-gastos contenedor'>
      
      {
        filtro ? (
          <>
            <h2>{gastosFilter.length ? 'Gastos' : 'No hay gastos en la categoría seleccionada'}</h2>
            {gastosFilter.map(gasto => (
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {gastos.map(gasto => (
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        )
      }
      

    </div>
  )
}

export default ListadoGastos
