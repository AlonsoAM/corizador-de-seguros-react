import styled from '@emotion/styled'
import React, { useState } from 'react'
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from '../helper'
import PropTypes from 'prop-types'

// Styled Components
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const Label = styled.label`
  flex: 0 0 100px;
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
  margin-top: 2rem;

  // SAS
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`
// ---------------------------------------------------------------

// Componente Formulario
const Formulario = ({ setResumen, setCargando }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  })
  const [error, setError] = useState(false)

  //extraer los valores del state
  const { marca, year, plan } = datos

  // Leer los datos del formulario y colocarlos en el state
  const obtenerInformacion = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  // Cuando el usuario presiona submit
  const cotizarSeguro = (e) => {
    e.preventDefault()
    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true)
      return
    } else {
      setError(false)

      // Se va a tener una base de 2000
      let resultado = 2000

      // Obtener la diferencia de años
      const diferencia = obtenerDiferenciaYear(year)

      // por cada año hay que restar el 3%
      resultado -= (diferencia * 3 * resultado) / 100

      // Americano 15%
      // Asiático 5%
      // Europeo 30%
      // eslint-disable-next-line no-unused-vars
      resultado = calcularMarca(marca) * resultado

      // Plan básico aumenta 20%
      // Plan completo aumenta 50%
      const incrementoPlan = obtenerPlan(plan)

      resultado = parseFloat(incrementoPlan * resultado).toFixed(2)

      // Trabajando el spinner
      setCargando(true)
      setTimeout(() => {
        // Elimina el spinner
        setCargando(false)
        // Total - pasarlo al state del componente principal
        setResumen({
          cotizacion: resultado,
          datos,
        })
      }, 2000)
    }
  }

  return (
    <>
      <form onSubmit={cotizarSeguro}>
        {error ? <Error>Todos los campos son obligatorios</Error> : null}
        <Campo>
          <Label>Marca</Label>
          <Select name="marca" value={marca} onChange={obtenerInformacion}>
            <option value="">-- Seleccione --</option>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiático</option>
          </Select>
        </Campo>
        <Campo>
          <Label>Año</Label>
          <Select name="year" value={year} onChange={obtenerInformacion}>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </Campo>
        <Campo>
          <Label>Plan</Label>
          <InputRadio
            type="radio"
            name="plan"
            value="basico"
            checked={plan === 'basico'}
            onChange={obtenerInformacion}
          />{' '}
          Básico
          <InputRadio
            type="radio"
            name="plan"
            value="completo"
            checked={plan === 'completo'}
            onChange={obtenerInformacion}
          />{' '}
          Completo
        </Campo>
        <Button type="submit">Cotizar</Button>
      </form>
    </>
  )
}

Formulario.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired,
}

export default Formulario
