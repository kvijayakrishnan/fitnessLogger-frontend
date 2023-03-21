

import { NavLink } from "react-router-dom";
import React from "react";
import './Header.css'

const Header = () => {
    return(
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div>
              <NavLink className='navbar-brand' to='/' > <b>Fitness App</b></NavLink>
            </div>
            <div>
              <NavLink className='navbar-brand' to='/fitness/create' >Create Fitness Log</NavLink>
            </div>
          </nav>
        </div>
  

        
    )
}






export default Header;


