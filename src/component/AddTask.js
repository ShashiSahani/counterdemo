import React, { useState } from "react";
import "./AddTask.css";
export default function AddTask({tasks,setTasks}) {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handlereset = () => {
    setTaskValue("");
    setProgress(false);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Boolean(progress));
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: taskValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks,task]);

    handlereset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Task Name :</label>
        <input
          type="text"
          value={taskValue}
          id="task"
          name="task"
          autoComplete="off"
          placeholder="Task Name"
          onChange={handleChange}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Compeleted</option>
        </select>
        <span className="reset" style={{}} onClick={handlereset}>
          Reset
        </span>
        <button type="submit">Add Task</button>
      </form>
      <p>{taskValue}</p>
      <p>{taskValue.length}</p>
    </section>
  );
}
