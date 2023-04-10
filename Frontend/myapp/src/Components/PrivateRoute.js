import React , { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import {useDispatch,useSelector} from 'react-redux'
import {setContacts} from '../store/authSlice'
import {fetchAccount} from '../api/authuser'

import User from '../Components/User/User'
import Admin from '../Components/Admin/Admin'


import Login from '../Components/Register'
const PrivateRoute = () => {


const dispatch = useDispatch()
const auth = useSelector(state=>state.authuser)
console.log('lina redux auth',auth)


const getAccout=async()=>{
  const data = await fetchAccount()
  console.log("data",data)
  dispatch(setContacts(data))
}
useEffect(()=>{
getAccout()
},[])



const navigate = useNavigate()

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/')
}



  
const token = localStorage.getItem('token')
console.log('token el user specifique ', token )

return (

    <div>
         <div>
{
  token ? (<>   
 { /* <NavBarContainer auth={auth} logout={logout} /> */ }
  

  {auth.role === "admin" ? (<Admin  auth={auth} /> ):( <User logout={logout}  auth={auth}/>) } 
  
   </>) : (<Login/>)
}
         </div>


    </div>


  )



}

export default PrivateRoute