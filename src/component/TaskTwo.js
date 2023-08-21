import React, { useState } from "react";
import "../App.css";
import BoxCard from "./BoxCard";
import TaskCart from "./TaskCart";

function TaskTwo({tasks,setTasks}) {

  const [show, setShow] = useState(false);

 
  const style={
   border:"2px solid ",color:show?"red":"green",
    borderColor:show?"pink":"yellow",
  }

  const handleDelete = (id) => {
    // console.log(id);
    setTasks(tasks.filter((item) => id !== item.id));
  };

  return (
    <div className="container">
    
    <h1 style={style}>Task List</h1>
  
      <button
        className="toggle"
        style={{ alignSelf: "center" }}
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      <ul>
        {show &&
          tasks.map((item) => (
            <TaskCart key={item?.id} item={item} handleDelete={handleDelete} />
          ))}
      </ul>

      <BoxCard result="success" style={style} >
        <p className="title">Lorem ipsum dolor sit amet .</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius?
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi
          inventore voluptates quaerat aperiam, nemo illo quod natus
          perspiciatis incidunt!
        </p>
      </BoxCard>
      <BoxCard result="danger">
        <p className="title">Lorem, ipsum.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius?
        </p>
      </BoxCard>
      <BoxCard result="primary">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius?
        </p>
      </BoxCard>
    </div>
  );
}

export default TaskTwo;
