import React from "react";
import { useParams } from "react-router-dom";

function UserDetail(){
  const newparams=useParams()
  return<>
     <h1>User Detail{newparams.id}</h1>
  </>

}

export default UserDetail