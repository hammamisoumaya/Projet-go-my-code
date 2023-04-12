import React, { useState } from "react";
import { useNavigate } from 'react-router';
import {PostServices} from '../../api/authservice'
import './Addservice.css'
import Nav  from '../Nav/Nav'


const Addservice = () => {
    const [nom, setNom] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate()
    const handelAdd=async(values)=>{
        await PostServices(values)
        navigate('/listservice')
       }


  return (

    <div>
        <Nav/>
    <h1>Ajouter un service informatique</h1>
    <form onSubmit={handelAdd}>
      <label htmlFor="nom">Nom du service :</label>
      <input
        type="text"
        id="nom"
        name="nom"
        value={nom}
       onChange={(event) => setNom(event.target.value)}
        required
      />
      <label htmlFor="description">Description du service :</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      ></textarea>
      <label htmlFor="image">Image du service :</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={(event) => setImage(event.target.files[0])}
       
        required
      />
      <input type="submit" value="Ajouter le service" />
    </form>
  </div>
  )
}

export default Addservice