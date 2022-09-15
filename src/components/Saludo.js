import AgeLabel from "./AgeLabel"

function Saludo ( {name, age} ) {
    return (
        <>
          <h2>Saludos {name}!</h2>
          <AgeLabel age={age}/>
        </>
    )
}

export default Saludo