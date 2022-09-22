import { useEffect } from "react"

const products = [
    {id: 1, name:'mouse', price:'20'},
    {id: 2, name:'teclado', price:'30'},
    {id: 3, name:'monitor', price:'250'},
]

const ItemList = () => {

  useEffect( ()=>{
    getProducts()
  }, [])

  const getProducts = () => {
    const productsPromise = new Promise( (resolve, reject)=>{
        const rand = Math.random()
        console.log(rand);
        if (rand > 0.5) {
            resolve('success!!!')
        }
        reject('fail')
    })

    productsPromise
        .then( res => {
            console.log('res: ' + res);
        })
        .catch( err => {
            console.log('err: ' + err);
        })

    console.log('trayendo productos...');
  }

  return (
    <div>ItemList</div>
  )
}
export default ItemList