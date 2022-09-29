import { useEffect, useState } from "react"

const StarWarsContainer = () => {

  const [people, setPeople] = useState([])

  useEffect(() => {
    getPeople()
  }, [])
  
  const getPeople = () => {
    const URL = 'https://swapi.dev/api/people/?page=3'
    fetch( URL )
        .then( response => response.json() )
        .then( data => {
            console.log( data );
            setPeople( data.results )
        })
  }

  return (
    <div>
        <h1>StarWars Container</h1>
        { people.map( p => <li key={p.url}>{ p.name }</li> ) }
    </div>
  )
}
export default StarWarsContainer