import React, { useState } from "react";
import "../App.css";
function TaskTwo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Building Profile", completed: false },
    { id: 2, name: "Task building", completed: true },
    { id: 3, name: "Tracking Profile", completed: false },
  ]);

  const handleDelete=(id)=>{
    console.log(id)
    setTasks(tasks.filter(item=>id !==item.id));
   
  }
  return (
    <div>
      <p>Task List</p>
      <ul>
    {tasks.map((item)=>(
        
            <li key={item.id}>
                <span>{item.id} - {item.name}</span>
                <button onClick={()=>handleDelete(item.id)} className="delete">Delete</button>
            </li>
     
        ))}
      </ul>
    </div>
  );
}

export default TaskTwo;
