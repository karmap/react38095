import ItemList2 from "./ItemList2"

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="m-5">
      <h1>{greeting}</h1>
      <ItemList2/>
    </div>
  )
}
export default ItemListContainer