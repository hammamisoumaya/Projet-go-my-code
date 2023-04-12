import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
const Admin = ({auth,logout}) => {
  return (
    <>
  <div className="all">
    
    <div className="left">
      <div className="text"><Link to={'/Addservice'}>User</Link></div>
    </div>
    <div className="center">
      <div className="explainer">
        <span>Hover me</span>
      </div>
      <div className="text"><Link to={'/dashborad'}>Admin</Link></div>
    </div>
    
    <div className="righter">
    <div className="text"><Link to={'/'}>Déconnexion</Link></div>
    </div>
  </div>
</>
  )
}

export default Admin
