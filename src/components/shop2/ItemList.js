import React, { useEffect, useState } from 'react'
import { products } from './data/products'
import ItemCard from './ItemCard'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then( response => {
      console.log( response );
      setItems( response )
    })
  }, [])
  
  const getProducts = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products )
      }, 1000);
    })
  }

  return (
    <>
      <div>Tienda 2</div>
      { items.map( i => <ItemCard key={i.id} {...i}/> ) }
    </>
  )
}

export default ItemList