import React,{useEffect, useState} from 'react'
import "./Updatecareer.css"
import {updatecareer,getUniquecareer} from '../../api/authcareer'
import { useNavigate,useParams } from 'react-router';
import Nav  from '../Nav/Nav'

const Updatecareer  = () => {
  const [name,setName]=useState('')
const [description,setDescription]=useState('')

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
console.log("data unique",data.getuniquecareer)
setName(data.getuniquecareer.name)
setDescription(data.getuniquecareer.description)




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
    
    <input type="text"   value={name}   placeholder="Ajouter le nom du career"
        
        onChange={(event) => setName(event.target.value)} />
   
  
  
    <input   value={description}        placeholder="Ajouter la description du career"
        
        onChange={(event) => setDescription(event.target.value)} />
  
 
      <button type="button" onClick={()=>handecar(id,{name,description})}>Ajouter</button>
      </form>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Updatecareer