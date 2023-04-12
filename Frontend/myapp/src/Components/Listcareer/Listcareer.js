import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchcareer} from '../../api/authcareer'
import {setcareer} from '../../store/careerSlice'
import Cardcareer from './Cardcareer'
import Nav  from '../Nav/Nav'


const Listcareer = () => {
  //partie redux 
  const career = useSelector(state=>state.career)
  console.log(career,'career b3ed rabtan bil db')
//partie jiben el data 

const dispatch = useDispatch()
const getcareer = async()=>{
  const data = await fetchcareer()
   console.log(data.ser,'data get services ')
  dispatch(setcareer(data.ser))
}

useEffect(()=>{
    getcareer()
},[])


// //lina el data  heya la partie contact
  return (
    <div> <Nav/> 
    <div >
      {
        career.map((e)=> <Cardcareer career={e}  getcareer={getcareer} /> )
      }
    </div>
    </div>
  )
}

export default Listcareer