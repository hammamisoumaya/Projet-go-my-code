import React,{useEffect, useState} from 'react'
import "./Updateservice.css"
import {updateServices,getUniqueServices} from '../../api/authservice'
import { useNavigate,useParams } from 'react-router';
import Nav  from '../Nav/Nav'

const Updateservice  = () => {
  const [nom,setnom]=useState('')
const [description,setdescription]=useState('')
const [image,setimage]=useState('')
const navigate = useNavigate()
const {id}=useParams()
console.log('ici',id)

const handeUpdat=async(idser,values)=>{
await updateServices(idser,values)
navigate('/listservice')
}
// lina partie jiben data unique pour usestate

const getUniqueId=async(serviceid)=>{
const data = await getUniqueServices(serviceid)
console.log("data unique",data.getuniqueServices)
setnom(data.getuniqueServices.nom)
setdescription(data.getuniqueServices.description)
setimage(data.getuniqueServices.image)



}
useEffect(()=>{
if(id){getUniqueId(id)}
},[id])

  return (
    <div>
    <Nav/>
    <div className= "bodyregister">
    <div className ="main">
<input type="checkbox" id="chk" aria-hidden="true" />
<div className="signup">
    <form>
    <label htmlFor="chk" aria-hidden="true">
      Mise à jour le service
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
      <button type="button" onClick={()=>handeUpdat(id,{nom,description,image})}>Ajouter</button>
      </form>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Updateservice