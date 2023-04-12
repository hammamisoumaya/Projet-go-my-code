import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/home'
import Services from './Components/Services/service'
import Agence from './Components/Agence/agence'
import Contact from './Components/Contact/contact'
import Dashborad from './Components/Dashborad/Dashborad'
import Listservice from './Components/Listservice/Listservice'
import Addservice from './Components/Addservice/Addservice'
import Updateservice from './Components/Updateservice/Updateservice'
import Listcareer from './Components/Listcareer/Listcareer'
import Addcareer from './Components/Addcareer/Addcareer'
import Updatecareer from './Components/Updatecareer/Updatecareer'

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Register/>}/>
     
      <Route path='/app/Private' element={<PrivateRoute/>}/>

      <Route path='/Homepage' element={<Home/>}/>
       <Route path='/Services' element={<Services/>}/>
       <Route path='/Agence' element={<Agence/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/dashborad' element={<Dashborad/>}/>
       <Route path='/listservice' element={<Listservice/>}/>
       <Route path='/Addservice' element={<Addservice/>}/>
       <Route path='/Updateservice/:id' element={<Updateservice/>}/>
       <Route path='/listcareer' element={<Listcareer/>}/>
       <Route path='/Addcareer' element={<Addcareer/>}/>
       <Route path='/Updatecareer/:id' element={<Updatecareer/>}/>


     </Routes>

    </div>
  );
}

export default App;