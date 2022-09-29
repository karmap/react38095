import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const RMCard = ( {id, name, image} ) => {
  return (
    <Link to={`/ram/${id}`}>
        <div>{name}</div>
        <img src={image} />
    </Link>
  )
}

const RMContainer = () => {

  const [chars, setChars] = useState([])

  useEffect(() => {
    getChars()
  }, [])

  const getChars = async () => {
    const URL = 'https://rickandmortyapi.com/api/character'
    const response = await axios.get( URL )
    setChars( response.data.results )
  }

//   const getChars = async () => {
//     const URL = 'https://rickandmortyapi.com/api/character?page=2'
//     const res = await fetch( URL )
//     const data = await res.json()
//     setChars( data.results )
//   }

//   const getChars = () => {
//     const URL = 'https://rickandmortyapi.com/api/character'
//     fetch( URL )
//       .then( res => res.json() )
//       .then( data => {
//         console.log( data.results );
//         setChars( data.results )
//       })
//       .catch( err => { console.log(err); })
//   }
  
  return (
    <div>
        { chars.map( c => <RMCard key={c.id} {...c}/>)}
    </div>
  )
}
export default RMContainer