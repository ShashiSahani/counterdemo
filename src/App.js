import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  function handelAdd() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  function handleSub() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Hello world!</h1>
      <div className="box">
        <p>{count}</p>
        <div className="box2">
          <button className="button add" onClick={handelAdd}>
            ADD
          </button>
          <button className="button sub" onClick={handleSub}>
            SUB
          </button>
          <button className="button reset" onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
