import React, { useContext, useEffect, useState } from 'react'
import { DarkmodeContext } from '../../context/DarkmodeContext'
import { products } from './data/products'
import ItemCard from './ItemCard'

const ItemList = () => {

  const [items, setItems] = useState([])
  const Darkmode = useContext( DarkmodeContext )

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

      <div>
        <strong>Darkmode: { Darkmode ? 'Activado' : 'Desactivado' }</strong>
      </div>
    </>
  )
}

export default ItemList