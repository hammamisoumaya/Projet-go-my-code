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
      <h1>Les services de notre agence Web</h1>
      <p>Notre objectif est de comprendre votre vision d'entreprise et de la transformer en une présence en ligne engageante que vos clients actuels et potentiels adoreront. Et notre équipe d'experts en conception, développement et marketing digital s'efforce toujours de trouver des solutions uniques et pratiques qui apporteront à coup sûr du succès dans le monde en ligne hautement concurrentiel.</p>
      {
        service.map((e)=> <Cardservice service={e}  getservice={getservice} /> )
       
      }
      
    </div>
    </div>
  )
}

export default Listservice