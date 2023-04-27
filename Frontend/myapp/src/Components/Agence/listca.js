import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchcareer} from '../../api/authcareer'
import {setcareer} from '../../store/careerSlice'
import Cardcareer from './agence'
import NavBar  from '../NavBar/navbar'


const Listca = () => {
  //partie redux 
  const careerss = useSelector(state=>state.career)
  console.log(careerss,'career b3ed rabtan bil db')
//partie jiben el data 

const dispatch = useDispatch()
const getcareer = async()=>{
  const data = await fetchcareer()
   console.log(data.carr,'data get services ')
  dispatch(setcareer(data.carr))
}

useEffect(()=>{
    getcareer()
},[])


// //lina el data  heya la partie contact
  return (
    <div> <NavBar/> 
    <h1 style={{textAlign: 'center', color: '#FFC0CB'}}>Nos offre d'emploi</h1>
    <p style={{textAlign: 'center',color: '#000080', fontSize: '2em', fontWeight: 'bold'}}>
        Si vous voulez postuler à nos offres d'emploi, vous pouvez envoyer vos CV à notre adresse email : quete.technologie@gmail.com
      </p>

    <div >
      {
        careerss.map((e)=> <Cardcareer career={e}  getcareer={getcareer} /> )
      }
    </div>
    <footer style={{ backgroundColor: '#FFE4E1', padding: '20px', textAlign: 'center' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOelUNrxkHRJiFCw2A1OpVDTi0bg_YTlo53w&usqp=CAU" alt="Logo" style={{ maxWidth: '50%', marginBottom: '10px' }} />
      <p style={{  fontSize: '1em',color: '#000080' }}>Powered by Hammami Soumaya</p>
    </footer>
    </div>
  )
}

export default Listca