import { useContext, useEffect, useState } from "react";
import { DarkmodeContext } from "../context/DarkmodeContext";
import ClicklerExpensive from "./ClicklerExpensive";

const Clicker = () => {

  const Darkmode = useContext( DarkmodeContext )
  // console.log( Darkmode );
  
  const [counter, setCounter] = useState(0)

  useEffect( () => {
    console.log('se montó el componente');
  }, [])

//   useEffect( () => {
//     console.log('se hizo render');
//   })

  useEffect( () => {
    console.log('se alteró counter');
  }, [counter])
  
  const clickHandler = () => {
    console.log('Hiciste click');
    setCounter( counter + 1 ) 
  }

  return (
    <div>
      <div className="m-5">{ counter }</div>
      <button onClick={ clickHandler } className="btn m-5">Click aquí</button>
      <div>
        <strong>Darkmode: { Darkmode ? 'Activado' : 'Desactivado' }</strong>
      </div>

      <ClicklerExpensive/>
    </div>
  )
}
export default Clicker