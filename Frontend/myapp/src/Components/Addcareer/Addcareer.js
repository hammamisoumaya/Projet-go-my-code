import React, { useState } from "react";
import { useNavigate } from 'react-router';
import {Postcareer} from '../../api/authcareer'
import './Addcareer.css'
import Nav  from '../Nav/Nav'


const Addcareer = () => {
  const [name,setname]=useState('')
  const [description,setdescription]=useState('')
    const navigate = useNavigate()
    const handelcar=async(values)=>{
        await Postcareer(values)
        navigate('/listcareer')
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
          Ajouter un career
        </label>
        
        <input type="text"   value={name}    placeholder="Ajouter le nom du career"
            
            onChange={(event) => setname(event.target.value)} />
       
      
      
        <input   value={description}   placeholder="Ajouter la description du career"
            
            onChange={(event) => setdescription(event.target.value)} />
      
      
     
      <button type="button" onClick={()=>handelcar({name,description})}>Ajouter</button>
    </form>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Addcareer