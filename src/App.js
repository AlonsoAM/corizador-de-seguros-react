import Header from './components/Header'
import Formulario from './components/Formulario'
import styled from '@emotion/styled'
import { useState } from 'react'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
`

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',
    },
  })

  const [cargando, setCargando] = useState(false)

  // Extraer datos
  const { datos, cotizacion } = resumen
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setCargando={setCargando} />

        {cargando ? <Spinner /> : null}

        {!cargando ? <Resumen datos={datos} /> : null}

        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  )
}

export default App
