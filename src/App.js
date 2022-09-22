import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Clicker from './components/Clicker';
import ItemListContainer from './components/shop/ItemListContainer';

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
      <NavBar/>
      <Clicker/>
      <ItemListContainer greeting='Mi tienda' />
      {/* <h1 className="text-3xl font-bold underline font-mono	">¡Hola Mundo!</h1>
      <BoxForChildren>
        <p>Parrafo con texto</p>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </BoxForChildren>
      <h2 style={ styles }>Subtítulo</h2>
      <li className='green'>elemento 1</li>
      <li>elemento 2</li>
      <li>elemento 3</li>
      <span>otra cosa</span>
      <strong>en negritas</strong>
      <Saludo name='Miguel' age={23} />
      <Saludo name='Jorge' age={18} ></Saludo>
      <Saludo name='Robinson' age={28} ></Saludo> */}
    </>
  );
}

export default App;
