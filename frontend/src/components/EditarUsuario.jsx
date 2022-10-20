import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditarUsuario() {

  const { id } = useParams();
  const navegar = useNavigate();
  const [nombre, setNombre] = useState();
  const [apellidos, setApellidos] = useState();
  const [edad, setEdad] = useState();

  useEffect(() => {
  
    cargarUsuario();

  }, []);

  const cargarUsuario = async () => {
  
    const idusuario = id;
    const respuesta = await axios.get(`http://localhost:4000/api/usuarios/${idusuario}`);
    
    setNombre(respuesta.data.nombre);
    setApellidos(respuesta.data.apellidos);
    setEdad(respuesta.data.edad);

  }

  const volver = () => {

    navegar('/');

  }

  const enviarFormulario = async (e) => {

    e.preventDefault();

    const idusuario = id;

    const usuarioeditado = await axios.put(`http://localhost:4000/api/usuarios/${idusuario}`, {
      nombre: nombre,
      apellidos: apellidos,
      edad: edad
    }); 

    if (usuarioeditado) {

      navegar('/');

    }

  }

  return (
    
    <div className="contenedor">

    <form onSubmit={ enviarFormulario }>

    <input type="text" name="nombre" value={ nombre } onChange={(e) => setNombre(e.target.value) } />
    <br />
    <input type="text" name="apellidos" value={ apellidos } onChange={(e) => setApellidos(e.target.value) } />
    <br />
    <input type="number" name="edad" value={ edad } onChange={(e) => setEdad(e.target.value) } />
    <br />

    <button type='submit'>Editar</button>
    <button onClick={ volver }>Volver</button>
    </form>  
    
    </div>
  
  )
}

export default EditarUsuario