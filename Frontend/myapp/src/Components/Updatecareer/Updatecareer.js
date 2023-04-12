import React,{useEffect, useState} from 'react'
import "./Updatecareer.css"
import {updatecareer,getUniquecareer} from '../../api/authcareer'
import { useNavigate,useParams } from 'react-router';
import Nav  from '../Nav/Nav'

const Updatecareer  = () => {
  const [name,setname]=useState('')
const [description,setdescription]=useState('')

const navigate = useNavigate()
const {id}=useParams()
console.log('ici',id)

const handecar=async(idca,values)=>{
await updatecareer(idca,values)
navigate('/listcareer')
}
// lina partie jiben data unique pour usestate

const getUniqueId=async(careerid)=>{
const data = await getUniquecareer(careerid)
console.log("data unique",data.getUniquecareer)
setname(data.getUniquecareer.name)
setdescription(data.getUniquecareer.description)




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
      Mise à jour du career
    </label>
    
    <input type="text"   value={name} 
        
        onChange={(event) => setname(event.target.value)} />
   
  
  
    <input   value={description}
        
        onChange={(event) => setdescription(event.target.value)} />
  
 
      <button type="button" onClick={()=>handecar(id,{name,description})}>Ajouter</button>
      </form>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Updatecareer