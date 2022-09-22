import React from 'react';
import { useParams , useLocation, useHistory } from 'react-router-dom';

const User = ({match}) => {
    const {fname ,lname} = useParams();
    const location = useLocation();
    const History =useHistory();
    console.log(History);
  return (
    <div>
       <h3>Hi User {fname} {lname}</h3>
       <p>My Location is {location.pathname}</p>
       {location.pathname===`/user/fname/lname` ? 
     <button onClick={()=> History.push('/')}> Click Me</button>
 : null    }
    </div>
  )
}

export default User
