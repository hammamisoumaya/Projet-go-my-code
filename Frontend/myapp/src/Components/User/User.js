import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
const User = ({auth,logout}) => {
  return (
    <>
  <div className="all">
    <div className="lefter">
      <div className="text"><Link to={'/Contact'}>Contact</Link></div>
    </div>
    <div className="left">
      <div className="text"><Link to={'/Services'}>Nos services</Link></div>
    </div>
    <div className="center">
      <div className="explainer">
        <span>Hover me</span>
      </div>
      <div className="text"><Link to={'/Homepage'}>Accueil</Link></div>
    </div>
    <div className="right">
      <div className="text"><Link to={'/Agence'}>L'agence</Link></div>
    </div>
    <div className="righter">
      <div className="text" onClick={()=>logout()}>Déconnexion</div>
    </div>
  </div>
</>
  )
}

export default User