import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <div className='nav-overlay'>
        <nav className='nav-bar'>
          <div className='logo'>
            {/* Logo could go here */}
          </div>
          <h1 className='h1-header'></h1>
          <ul>
            <li> 
              <NavLink to="/" activeClassName="active"  activeStyle={{ color:'#7fffd4;' }}>Home</NavLink>
            </li>
            <li> 
              <NavLink to="/About" activeClassName="active"  activeStyle={{ color:'#7fffd4;' }}>About</NavLink>
            </li>
            <li> 
              <NavLink to="/Trainers" activeClassName="active"  activeStyle={{ color:'#7fffd4;' }}>Trainer</NavLink>
            </li>
            <li> 
              <NavLink to="/Classes" activeClassName="active"  activeStyle={{ color:'#7fffd4;' }}>Classes</NavLink>
            </li>
            <li className='signup-btn'>
              <Link to='/SignUp'>Sign Up</Link>
            </li>
          </ul>      
        </nav>  
      </div>
    </div>
  );
}
