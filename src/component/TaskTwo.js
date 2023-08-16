import React, { useState } from "react";
import "../App.css";
import TaskCart from "./TaskCart";
function TaskTwo(props) {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Building Profile", completed: false },
    { id: 2, name: "Task building", completed: true },
    { id: 3, name: "Tracking Profile", completed: false },
  ]);
  const [show,setShow]=useState(false);
  console.log(props)


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
        
     <TaskCart item={item} handleDelete={handleDelete}/>
        ))}
    
      </ul>
    </div>
  );
}

export default TaskTwo;
