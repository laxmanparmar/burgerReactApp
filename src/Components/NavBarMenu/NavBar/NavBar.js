import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './NavBar.css';

const NavBar =(props)=>
{
    return(
      <div className="nav">
            <input type="checkbox" id="nav-check"/>
            <div className="nav-header">
                <div className="nav-title">
                    <Logo />
                </div>
        </div>
        <div className="nav-btn">
            <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
  
         <div className="nav-links">
            <Navigation >BurgerBuilder</Navigation>
            <Navigation >CheckOut</Navigation>
           
        </div>
     </div>
    )   
}

export default NavBar;