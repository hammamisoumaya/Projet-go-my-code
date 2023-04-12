import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div><ul>
    <li><a  ><Link to={'/dashborad'} >Dashborad</Link></a></li>
    <li><a><Link to={'/listservice'}>ListService</Link></a></li>
    <li><a><Link to={'/Addservice'}>Add service</Link></a></li>
    <li><a><Link to={'/Updateservice/:id'}>Update service</Link></a></li>
    <li><a><Link to={'/'}>Logout</Link></a></li>
  </ul></div>
  )
}

export default Nav