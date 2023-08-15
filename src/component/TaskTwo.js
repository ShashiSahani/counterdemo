import React, { useState } from 'react'
import "../App.css"
function TaskTwo() {
    const [task,setTasks]=useState([{id:1,name:"Building Profile",completed:false},{},{}])
  return (
    <div>
        <p>Task List</p>
      
    </div>
  )
}

export default TaskTwo
