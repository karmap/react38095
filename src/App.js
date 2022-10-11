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
import { DarkmodeContext } from './context/DarkmodeContext';
import { useState } from 'react';
import { FavProvider } from './context/FavContext';
import CondicionalContainer from './components/condicional/CondicionalContainer';
import Cart from './components/shop/Cart';

function App() {

  const [darkmode, setDarkmode] = useState( true )

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  const darkmodeHanlder = () => {
    setDarkmode( !darkmode )
  }

  return (
    <DarkmodeContext.Provider value={darkmode}>
      <FavProvider>
        <BrowserRouter>
          <NavBar/>
          <button className='btn' onClick={darkmodeHanlder}>darkmode</button>
          <Routes>
            <Route path={'/'} element={<Clicker/>} />
            <Route path={'/cart'} element={<Cart/>} />
            <Route path={'/condicional'} element={<CondicionalContainer/>} />
            <Route path={'/ram'} element={<RMContainer/>} />
            <Route path={'/ram/:id'} element={<RMDetail/>} />
            <Route path={'/swapi'} element={<StarWarsContainer/>} />
            <Route path={'/shop'} element={<ItemList/>} />
            <Route path={'/shop/item/:id'} element={<ItemDetail/>} />
            <Route path={'*'} element={<Error404/>} />
          </Routes>
        </BrowserRouter>
      </FavProvider>
    </DarkmodeContext.Provider>
  );
}

export default App;
