import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListaUsuarios() {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
  
      cargarDatos();
  
    }, []);
  
    const cargarDatos = async () => {
  
      const respuesta = await axios.get("http://localhost:4000/api/usuarios");
      setDatos(respuesta.data);
  
    }

    const eliminar = async (id) => {

      const usuarioeliminado = await axios.delete(`http://localhost:4000/api/usuarios/${id}`);

      if (usuarioeliminado) {

        cargarDatos();

      }

    }

  return (
    <>
    <h1>Lista de usuarios</h1>

  <table>

    <thead>

    <tr>

    { datos.length === 0 ? <div></div> :
       <>
       <th>ID</th>
       <th>Nombre</th>
       <th>Apellidos</th>
       <th>Edad</th>
       <th>Editar</th>
       <th>Eliminar</th>
       </>
    }  

    </tr>

    </thead>

    <tbody>

        {
        
          datos.length === 0 ? <><h1>No hay usuarios</h1></> :
          
          datos.map((usuario, index) => (
        
            <tr key={ index }>
                <td>{ usuario._id }</td>
                <td>{ usuario.nombre }</td>
                <td>{ usuario.apellidos }</td>
                <td>{ usuario.edad }</td>
                <td><Link to={`/editar-usuario/${usuario._id}`}>Editar</Link></td>
                <td><button onClick={() => eliminar(usuario._id) }>Eliminar</button></td>
            </tr>
            
            ))
        
        }

    </tbody>

  </table>
    </>
  )
}

export default ListaUsuarios