import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="menu">
           <nav>
                <Link to="/">Home</Link>
                <Link to="user">Persona</Link>
                <Link to="company">Company</Link>
           </nav>
        </div>
      );
}

export default Menu