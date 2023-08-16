import React from 'react'
import  { useState } from "react";
import "../App.css"
function TaskCart(props) {
    console.log(props)
 
  return (
   
        <li key={props?.item?.id} className={props?.item?.completed?"compeleted":"incompelete"}>
        <div className="task-item">
          <span className="task-text">{props?.item?.id} - {props?.item?.name}</span>
          <button  className="delete" onClick={()=>props.handleDelete(props.item.id)}>Delete</button>
        </div>
      </li>
   
  )
}

export default TaskCart
