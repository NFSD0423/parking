import { useState } from "react"

export function Parking(props) {
  const [spacesVehicleUsed, setSpacesVehicleUsed] = useState(0)
  const addVehicle = () => {
    if (spacesVehicleUsed !== props.limit) {
      setSpacesVehicleUsed(spacesVehicleUsed + 1)
    }
  }

  const removeVehicle = () => {
    if (spacesVehicleUsed !== 0) {
      setSpacesVehicleUsed(spacesVehicleUsed - 1)
    }
  }

  return (
    <>
      <h1>Parking {props.title}</h1>
      <p>Plazas libres {props.limit - spacesVehicleUsed}/{props.limit}</p>
      <button disabled={spacesVehicleUsed === props.limit} onClick={addVehicle}>Aparcar</button>
      <button disabled={spacesVehicleUsed === 0} onClick={removeVehicle}>Sacar</button>
    </>
  )
}



















