import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Resumen = ({ datos }) => {
  // Extraer datos
  const { marca, year, plan } = datos

  if (marca === '' || year === '' || plan === '') return null
  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>
          Marca: <b>{marca.toUpperCase()}</b>
        </li>
        <li>
          Plan: <b>{plan.toUpperCase()}</b>
        </li>
        <li>
          Año del auto: <b>{year}</b>
        </li>
      </ul>
    </ContenedorResumen>
  )
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
}

export default Resumen
