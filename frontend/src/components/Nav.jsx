import React from 'react'
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div className='menu'>
         <NavLink to="/">Lista de usuarios</NavLink>
         <NavLink to="/crear-usuario">Crear usuario</NavLink>
    </div>
  )
}

export default Nav