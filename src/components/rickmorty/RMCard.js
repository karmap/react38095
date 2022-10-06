import { Link } from "react-router-dom"

export const RMCard = ( {id, name, image} ) => {
  
    return (
      <Link to={`/ram/${id}`}>
          <div>{name}</div>
          <img src={image} />
      </Link>
    )
  }