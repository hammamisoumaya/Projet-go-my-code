import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const careerSlice=createSlice({
    name:"career",
    initialState:[
        {
            id:uuidv4(),
            name:"careeeeeeer",
            description:"testttttttttt"
        
        }
    ],
    reducers:{
        setcareer:(state,action)=>{
   return action.payload
        }
    }
})

export const {setcareer} = careerSlice.actions
export default careerSlice.reducer