import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchServices} from '../../api/authservice'
import {setservice} from '../../store/serviceSlice'
import Cardservice from './Cardservice'
import Nav  from '../Nav/Nav'


const Listservice = () => {
  //partie redux 
  const service = useSelector(state=>state.service)
  console.log(service,'service b3ed rabtan bil db')
//partie jiben el data 

const dispatch = useDispatch()
const getservice = async()=>{
  const data = await fetchServices()
   console.log(data.ser,'data get services ')
  dispatch(setservice(data.ser))
}

useEffect(()=>{
    getservice()
},[])


// //lina el data  heya la partie contact
  return (
    <div> <Nav/> 
    <div >
      {
        service.map((e)=> <Cardservice service={e}  getservice={getservice} /> )
      }
    </div>
    </div>
  )
}

export default Listservice