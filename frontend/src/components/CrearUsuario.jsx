import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CrearUsuario() {

  const formularioInicial = {
    nombre: "",
    apellidos: "",
    edad: ""
  }

  const [datosFormulario, setDatosFormulario] = useState(formularioInicial);
  const navegar = useNavigate();

  const enviarFormulario = async (e) => {

    e.preventDefault();

    const nuevousuario = await axios.post("http://localhost:4000/api/usuarios", datosFormulario);

    if (nuevousuario) {

      navegar('/');

    }

  }

  const cambioDatos = (e) => {

    setDatosFormulario({
      
      ...datosFormulario, [e.target.name]: e.target.value

    });

  }

  const volver = () => {

    navegar('/');

  }

  return (
    <>
      <h1>Crear usuario</h1>

      <form onSubmit={ enviarFormulario }>

        Nombre <input type="text" name="nombre" onChange={ cambioDatos } />
        <br />
        Apellidos <input type="text" name="apellidos" onChange={ cambioDatos } />
        <br />
        Edad <input type="number" min="0" name="edad" onChange={ cambioDatos } />
        <br />
        <button type='submit'>Crear</button>
        <button type='submit' onClick={ volver }>Volver</button>

      </form>

    </>
  )
}

export default CrearUsuario