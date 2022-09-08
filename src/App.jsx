import './App.css';
import NavBar from './components/NavBar';
import ListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ListContainer greeting="Bienvenido a la tienda Mecenas Fight!" />
    </>
  );
}

export default App;
