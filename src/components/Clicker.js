import { useEffect, useState } from "react";

const Clicker = () => {
  
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
    </div>
  )
}
export default Clicker