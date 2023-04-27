import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  return (
  
        <div><ul>
          
    <li><a  ><Link to={'/Homepage'}>Accueil</Link></a></li>
    <li><a><Link to={'/Services'}>Nos services</Link></a></li>
    <li><a><Link to={'/Agence'}>Offre d'emploi</Link></a></li>
    <li><a><Link to={'/Contact'}>Contact</Link></a></li>
    <li><a><Link to={'/'}>Logout</Link></a></li>
  </ul></div>
      
  )
}

export default NavBar