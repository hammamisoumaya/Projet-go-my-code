import axios from 'axios'

export const fetchcareer = async()=>{
    const {data} = await axios.get('http://localhost:4000/career/getcareer')
    return data 
}

export const Postcareer =async (values)=>{
    const addingcareer = await axios.post('http://localhost:4000/career/addcareer',{...values})
}

export const updatecareer = async(id,values)=>{
    const updated = await axios.put(`http://localhost:4000/career/updatecarrer/${id}`,values)
}

export const  deletecareer =async(id)=>{
    const deletedcareer = await axios.delete(`http://localhost:4000/career/deletecareer/${id}`)
}

export const  getUniquecareer=async(id,values)=>{
const {data}= await axios.get(`http://localhost:4000/career/getcareer/${id}`,values)
return data 
}