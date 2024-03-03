import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
 
const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPre
}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) =>
            gasto.cantidad + total,
            0
        )

        const totalDisponible = presupuesto - totalGastado

        const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto * 100).toFixed(2)


        setDisponible(totalDisponible)
        setGastado(totalGastado)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000);
    }, [gastos])

    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('es-PE', {
            style: 'currency',
            currency: 'PEN'
        })
    }


    const resetearApp = () => {
        const confirmar = window.confirm('¿Estas seguro de resetear la app?')

        if (confirmar) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPre(false)
        }

    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    text={`Gasto -> ${porcentaje}%`}
                    className='circulo'
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.8,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: porcentaje > 100 ? '#DC2626' : '#004A77',
                        textColor: porcentaje > 100 ? '#DC2626' : '#004A77',
                        trailColor: '#ECF1F4',
                    })}
                />
            </div>

            <div
                className='contenido-presupuesto'
            >
                <button
                    className="reset-app"
                    type="button"
                    onClick={resetearApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span>
                    {formatearCantidad(presupuesto)}
                </p>

                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span>
                    {formatearCantidad(disponible)}
                </p>

                <p>
                    <span>Gastado: </span>
                    {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
