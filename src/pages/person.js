import React from 'react'
import Menu from '../components/menu'

/*React Router DOM methods*/
import { Outlet } from "react-router-dom";

function Person() {
    return (
        <div className="person-page">
          <Menu/>   
          <h1>Persona</h1>
          <Outlet />  
        </div>
      );
}

export default Person