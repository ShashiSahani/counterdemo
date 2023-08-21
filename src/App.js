
import "./App.css";       
import React, { useState } from "react"; 
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import Header from "./component/Header";
import TaskTwo from "./component/TaskTwo";

export default function App() {
  const [tasks, setTasks] = useState([
   
  ]);
  return (
  <>
  <Header/>
  <AddTask tasks={tasks} setTasks={setTasks}/>
  <TaskTwo tasks={tasks} setTasks={setTasks} />
  <Footer/>

  </>
  );
}
