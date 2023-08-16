import React, { useState } from "react";
import "../App.css";
function TaskTwo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Building Profile", completed: false },
    { id: 2, name: "Task building", completed: true },
    { id: 3, name: "Tracking Profile", completed: false },
  ]);
  const [show,setShow]=useState(false);


  const handleDelete=(id)=>{
    console.log(id)
    setTasks(tasks.filter(item=>id !==item.id));
   
  }
  
  return (
    <div className="container">
      <p>Task List</p>
      <button className="toggle" onClick={()=>setShow(!show)}>Toggle</button>
      <ul>
        {show && tasks.map((item)=>(
        
        <li key={item.id} className={item.completed?"compeleted":"incompelete"}>
        <div className="task-item">
          <span className="task-text">{item.id} - {item.name}</span>
          <button onClick={() => handleDelete(item.id)} className="delete">Delete</button>
        </div>
      </li>
        ))}
    
      </ul>
    </div>
  );
}

export default TaskTwo;
