
import "./App.css";        
import Footer from "./component/Footer";
import Header from "./component/Header";
import TaskTwo from "./component/TaskTwo";

export default function App() {
  const info="Random"
  return (
  <>
  <Header/>
  <TaskTwo info={info} />
  <Footer/>

  </>
  );
}
