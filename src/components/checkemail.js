import React from 'react'
import { useHistory } from "react-router-dom";
function Checkemail(){
  const history = useHistory();
  function back(){
    history.goBack();
   
    localStorage.removeItem('newuser');
  }
  
    return(
        <div>
        <div className="alluser">
          <div className="check">
            <h1>Please Check Your Email...... Check Spam</h1>
            <button className="button" onClick={back}>Back</button>
          </div>
        </div>
      </div>
    )
}

export default Checkemail