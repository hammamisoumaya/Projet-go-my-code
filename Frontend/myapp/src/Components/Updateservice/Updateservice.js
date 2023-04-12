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
console.log("data unique",data.getUniqueServices)
setnom(data.getUniqueServices.nom)
setdescription(data.getUniqueServices.description)
setimage(data.getUniqueServices.image)



}
useEffect(()=>{
if(id){getUniqueId(id)}
},[id])

  return (
    <div> <Nav/>
    <form >
      <label>
        Nom :
        <input
          type="text"
          value={nom}
          onChange={(event) => setnom(event.target.value)}
        />
      </label>
      <label>
        Description :
        <textarea
          value={description}
          onChange={(event) => setdescription(event.target.value)}
        />
      </label>
      <label>
        Image :
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setimage(event.target.files[0])}
        />
      </label>
      <button type="submit" onClick={()=>handeUpdat(id,{nom,description,image})}>Ajouter</button>
    </form>
    </div>
  )
}

export default Updateservice