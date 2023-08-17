import React from 'react'
import  { useState } from "react";
import "../App.css"
function TaskCart(props) {
    console.log(props)
 
  return (
   
        <li  className={props.item.completed?"compeleted":"incompeleted"} >
       
          <span className="task-text">{props?.item?.id} - {props?.item?.name}</span>
          <button  className="delete" onClick={()=>props.handleDelete(props.item.id)}>Delete</button>
       
      </li>
   
  )
}

export default TaskCart
