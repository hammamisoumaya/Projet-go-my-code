import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const serviceSlice=createSlice({
    name:"service",
    initialState:[
        {
            id:uuidv4(),
            nom:"maintenance site web",
            description:"La maintenance d'un site web est un ensemble de tâches nécessaires pour assurer son bon fonctionnement, sa sécurité, sa performance et sa mise à jour régulière",
            image:"https://nnw.fr/wp-content/uploads/2020/01/Monitoring-de-site-web-et-Maintenance-Fonctions-et-couts.jpg"
        }
        
    ],
    reducers:{
        setservice:(state,action)=>{
   return action.payload
        }
    }
})

export const {setservice} = serviceSlice.actions
export default serviceSlice.reducer