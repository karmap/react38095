import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFavs } from "../../context/FavContext"

const RMDetail = () => {

  const { id } = useParams()
  const [char, setChar] = useState({})

  const { add, favs } = useFavs()

  useEffect(() => {
    getChar()
  }, [])
  
  const getChar = async () => {
    const URL = 'https://rickandmortyapi.com/api/character/' + id
    const response = await axios.get(URL)
    // console.log(response.data);
    setChar( response.data )
  }

  const addHandler = () => {
    add( char.name )
    console.log(add, favs);
  }

  return (
    <>
        <div>Detalle del ID: {id}</div>
        <li>{ char.name }</li>
        <li>{ char.species }</li>
        <img src={ char.image }></img>
        <button onClick={addHandler} className="btn">Agregar a Favoritos</button>
    </>
  )
}
export default RMDetail