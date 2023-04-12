import React, {useState} from 'react'
import './Register.css'
import { useNavigate } from 'react-router';
import {postContact} from '../api/authuser'
import axios from 'axios';


const Register = () => {

  let navigate = useNavigate()
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const handelAdd=async(value)=>{
  await postContact(value)
  navigate('/login')
  }
  
  const handelLogin=async(values)=>{
    try{
    const res = await axios.post('http://localhost:4000/auth/login',values)
    await localStorage.setItem('token',res.data.token)
    navigate('/app/Private')
    }catch(err){
      
    console.log(err)
    }
    }



  return (
    <div className= "bodyregister">
      <div className ="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="text" placeholder="Email address "  value={email}  
            
            onChange={(e)=>setEmail(e.target.value)} />
      
            <input type="password" placeholder="Password" value={password}  
            
            onChange={(e)=>setPassword(e.target.value)} />
  
           <input type="text" placeholder="name"  
           value={name}  
            
           onChange={(e)=>setName(e.target.value)}/>
        <button type="button"  onClick={()=>handelAdd({name,password,email})} >Sign up</button>
        
      </form>
    </div>
    <div class="login  ">
    <form>
    <label for="chk" aria-hidden="true">Login</label>
      <input type="text" placeholder="Email address "  value={email}  
            
            onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password}  
            
            onChange={(e)=>setPassword(e.target.value)} />
   
    <button type="button"  onClick={()=>handelLogin({email,password})} >login</button>
  </form>
			</div>
      </div>
  </div>
    

    
    
  )
  }

export default Register