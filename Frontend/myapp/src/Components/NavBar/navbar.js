import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <div className="w3-top">
    <div className="w3-bar w3-white w3-card" id="myNavbar">
      <a  className="w3-bar-item w3-button w3-wide">
        LOGO
      </a>
      {/* Right-sided navbar links */}
      <div className="w3-right w3-hide-small">
        <a className="w3-bar-item w3-button">
        <Link to={'/Homepage'}>Accueil</Link>
        </a>
        <a  className="w3-bar-item w3-button">
          <i className="fa fa-user" /> <Link to={'/Services'}>Nos services</Link>
        </a>
        <a  className="w3-bar-item w3-button">
          <i className="fa fa-th" /> <Link to={'/Agence'}>L'agence</Link>
        </a>
        <a  className="w3-bar-item w3-button">
          <i className="fa fa-envelope" /><Link to={'/Contact'}>Contact</Link>
        </a>
      </div>
      {/* Hide right-floated links on small screens and replace them with a menu icon */}
      <a
        href="javascript:void(0)"
        className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
        onclick="w3_open()"
      >
        <i className="fa fa-bars" />
      </a>
    </div>
  </div>
 
  
    </div>
  )
}

export default NavBar