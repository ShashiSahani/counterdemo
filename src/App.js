
import "./App.css";        
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import Header from "./component/Header";
import TaskTwo from "./component/TaskTwo";

export default function App() {
  const info="Random"
  return (
  <>
  <Header/>
  <AddTask/>
  <TaskTwo info={info} />
  <Footer/>

  </>
  );
}
