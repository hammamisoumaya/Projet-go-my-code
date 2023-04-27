import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchServices} from '../../api/authservice'
import {setservice} from '../../store/serviceSlice'
import Cardservice from './Card'
import NavBar  from '../NavBar/navbar'


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
    <div> <NavBar/> 
    <div >
      <h1 style={{textAlign: 'center', color: '#FFC0CB'}}>Les services de notre agence Web</h1>
      <p style={{textAlign: 'center',color: '#000080', fontSize: '1em', fontWeight: 'bold'}}>Notre objectif est de comprendre votre vision d'entreprise et de la transformer en une présence en ligne engageante que vos clients actuels et potentiels adoreront. Et notre équipe d'experts en conception, développement et marketing digital s'efforce toujours de trouver des solutions uniques et pratiques qui apporteront à coup sûr du succès dans le monde en ligne hautement concurrentiel.</p>
      {
        service.map((e)=> <Cardservice service={e}  getservice={getservice} /> )
       
      }
      
    </div>
    <footer style={{ backgroundColor: '#FFE4E1', padding: '20px', textAlign: 'center' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOelUNrxkHRJiFCw2A1OpVDTi0bg_YTlo53w&usqp=CAU" alt="Logo" style={{ maxWidth: '50%', marginBottom: '10px' }} />
      <p style={{  fontSize: '1em',color: '#000080' }}>Powered by Hammami Soumaya</p>
    </footer>
    </div>
  )
}

export default Listservice