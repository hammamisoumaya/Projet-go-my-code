import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/home'
import Services from './Components/Services/service'
import Agence from './Components/Agence/agence'
import Contact from './Components/Contact/contact'

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


     </Routes>

    </div>
  );
}

export default App;