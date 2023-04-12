import React, { useState } from "react";
import { useNavigate } from 'react-router';
import {PostServices} from '../../api/authservice'
import './Addservice.css'
import Nav  from '../Nav/Nav'


const Addservice = () => {
  const [nom,setnom]=useState('')
  const [description,setdescription]=useState('')
  const [image,setimage]=useState('')
    const navigate = useNavigate()
    const handelAdd=async(values)=>{
        await PostServices(values)
        navigate('/listservice')
       }


  return (

    <div>
        <Nav/>
        <div className= "bodyregister">
        <div className ="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
        <form>
        <label htmlFor="chk" aria-hidden="true">
          Ajouter un service
        </label>
        
        <input type="text"   value={nom} 
            
            onChange={(event) => setnom(event.target.value)} />
       
      
      
        <input   value={description}
            
            onChange={(event) => setdescription(event.target.value)} />
      
      
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={(event) => setimage(event.target.value)}
      />
      <button type="button" onClick={()=>handelAdd({nom,description,image})}>Ajouter</button>
    </form>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Addservice