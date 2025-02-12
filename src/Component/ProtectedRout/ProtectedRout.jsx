
import { Navigate } from "react-router-dom"
import style from "./ProtectedRout.module.css"
import React from 'react'



export default function ProtectedRout(props) {


  if(localStorage.getItem('TokenContext')!==null){
    return props.cheldrin

  }
  else{ 
     return <Navigate to={'/Login'}/>
}




  
}
