import axios from 'axios'

export const fetchServices = async()=>{
    const {data} = await axios.get('http://localhost:4000/services/getservice')
    return data 
}

export const PostServices =async (values)=>{
    const addingContact = await axios.post('http://localhost:4000/services/addservice',{...values})
}

export const updateServices = async(id,values)=>{
    const updated = await axios.put(`http://localhost:4000/services/updateservice/${id}`,values)
}

export const  deleteServices =async(id)=>{
    const deleteduser = await axios.delete(`http://localhost:4000/services/deleteservice/${id}`)
}

export const  getUniqueServices=async(id,values)=>{
const {data}= await axios.get(`http://localhost:4000/services/getservice/${id}`,values)
return data 
}