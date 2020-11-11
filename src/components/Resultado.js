import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const Mensaje = styled.p`
  background-color: rgb(127, 224, 137);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6ad;
  background-color: rgb(127, 224, 137);
  margin-top: 1rem;
  position: relative;
`

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`

const Resultado = ({ cotizacion }) => {
  // console.log(cotizacion)
  return cotizacion === 0 ? (
    <Mensaje>Eliga marca, año y tipo de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>El total es: S/. {cotizacion}</TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  )
}

Resultado.propTypes = {
  cotizacion: PropTypes.string.isRequired,
}

export default Resultado
