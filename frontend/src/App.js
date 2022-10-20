import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import CrearUsuario from './components/CrearUsuario';
import EditarUsuario from './components/EditarUsuario';
import Error404 from './components/Error404';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="contenedor">

  <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={ <ListaUsuarios /> } />
        <Route path='/crear-usuario' element={ <CrearUsuario /> } />
        <Route path='/editar-usuario/:id' element={ <EditarUsuario /> } />
        <Route path='*' element={ <Error404 /> } />
      </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
