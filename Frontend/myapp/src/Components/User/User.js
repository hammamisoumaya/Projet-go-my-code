import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
const User = ({auth,logout}) => {
  return (
    <>
    <h3 className="front__text-header">{auth.name}</h3>
    <div className="background"></div>
<div className="outer-div">
  <div className="inner-div">
    <div className="front">
      <div className="front__bkg-photo"></div>
      <div className="front__face-photo"></div>
      <div className="front__text">
        <h3 className="front__text-header">{auth.name}</h3>
        <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>{auth.email}</p>
        
        <span className="front__text-hover">Hover to enter to the application </span>
      </div>
    </div>
    <div className="back">
      <div className="social-media-wrapper">
        <a href="#" className="social-icon"><i className="fab fa-codepen" aria-hidden="true"><Link to={'/Homepage'}>Accueil</Link></i></a> 
        <a href="#" className="social-icon"><i className="fab fa-github-square" aria-hidden="true"><Link to={'/Services'}>Nos services</Link></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin-square" aria-hidden="true"><Link to={'/Agence'}>Nos offre d'emploi</Link></i></a>
         <a href="#" className="social-icon"><i className="fab fa-instagram" aria-hidden="true"><div classNameName="text" onClick={()=>logout()}>Déconnexion</div></i></a>
      </div>
    </div>

  </div>
</div>
  
</>

  )
}

export default User