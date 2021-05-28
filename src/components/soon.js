import React from 'react'
import { useHistory } from "react-router-dom";

function Soon(){
    const history = useHistory();
  function back(){
    history.goBack()
  }
   return(
    <div>
    <div className="alluser">
      <div className="p404">
        <h1>Coming Soon</h1>
        <p>Please Wait, Update In Future</p>
        <button className="button" onClick={back}>Back</button>
      </div>
    </div>
  </div>
   )
}

export default Soon