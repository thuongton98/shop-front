import React from 'react'
import { useHistory } from "react-router-dom";

function P404(){
  const history = useHistory();
  function back(){
    history.goBack()
  }
   return(
    <div>
    <div className="alluser">
      <div className="p404">
        <h1>404</h1>
        <p>error, something wrong</p>
        <button className="button" onClick={back}>Back</button>
      </div>
    </div>
  </div>
   )
}

export default P404