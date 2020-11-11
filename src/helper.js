// diferencia de años
export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year
}

// Calcula el total a pagar segun la marca
export const calcularMarca = (marca) => {
  let incremento

  switch (marca) {
    case 'europeo':
      incremento = 1.3
      break
    case 'americano':
      incremento = 1.15
      break
    case 'asiatico':
      // eslint-disable-next-line no-unused-vars
      incremento = 1.05
      break
    default:
      break
  }

  return incremento
}

// Calcular el tipo de seguro
export const obtenerPlan = (plan) => {
  return plan === 'basico' ? 1.2 : 1.5
}
