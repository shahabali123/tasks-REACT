import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function User() {
    const params = useParams();
    const navigate = useNavigate();

    
  return (
    <div className='user'>
        <button onClick={()=> navigate("/about")}>Redirect to About Page</button>
    </div>
  )
}

export default User