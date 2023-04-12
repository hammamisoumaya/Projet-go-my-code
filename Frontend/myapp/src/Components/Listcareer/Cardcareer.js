import React from 'react'

import './Cardcareer.css'
import { useNavigate } from 'react-router';
import {deletecareer} from '../../api/authcareer'
const Cardcareer = ({career,getcareer}) => {

 
  const navigate=useNavigate()

  const navcar=()=>{
navigate(`/updatecarrer/${career._id}`)
  }


  return (
    
   
    
    <div>
       <button onClick={()=>navcar()}>Update</button>
       <button onClick={async()=>{await deletecareer(career._id);getcareer()}}>Delete</button>
     
        <section className="articles">
  <article>
    <div className="article-wrapper">
      
      <div className="article-body">
        <h2>{career.nom}</h2>
        <p>
        {career.description}
        </p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </article>
  
</section>

    </div>
    
  )
}

export default Cardcareer