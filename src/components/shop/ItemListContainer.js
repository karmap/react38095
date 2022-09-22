import ItemList from "./ItemList"

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="m-5">
      <h1>{greeting}</h1>
      <ItemList/>
    </div>
  )
}
export default ItemListContainer