import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

const products = [
    {id: 1, name:'mouse', price:'20'},
    {id: 2, name:'teclado', price:'30'},
    {id: 3, name:'monitor', price:'250'},
]

const ItemList2 = () => {

  const [items, setItems] = useState([ {id: 4, name:'cpu', price:'2500'},])

  useEffect( ()=>{
    getProducts().then( res => {
        setItems( res )
    })
    .catch( err => {
        console.log('err: ' + err);
    })
  }, [])

  const getProducts = () => {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve( products )
      }, 3000)
    })
  }

  return (
    <div>
      <h1>Componente ItemList2</h1>
      { items.map( item => <ItemCard key={item.id} {...item} /> ) }
    </div>
  )
}
export default ItemList2