import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Clicker from './components/Clicker';
import ItemListContainer from './components/shop/ItemListContainer';
import StarWarsContainer from './components/starwars/StarWarsContainer';
import RMContainer from './components/rickmorty/RMContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';
import RMDetail from './components/rickmorty/RMDetail';
import ItemList from './components/shop2/ItemList';
import ItemDetail from './components/shop2/ItemDetail';

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<Clicker/>} />
          <Route path={'/ram'} element={<RMContainer/>} />
          <Route path={'/ram/:id'} element={<RMDetail/>} />
          <Route path={'/swapi'} element={<StarWarsContainer/>} />
          <Route path={'/shop'} element={<ItemList/>} />
          <Route path={'/shop/item/:id'} element={<ItemDetail/>} />
          <Route path={'*'} element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
