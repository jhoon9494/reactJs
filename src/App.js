import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  const [key, setKey] = useState("");
  const onChange = (event) => setKey(event.target.value);
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  useEffect(() => {
    if (key !== "") {
      console.log("search for", key);
    } else {
      console.log("please search..");
    }
  }, [counter]);
  return (
    <div>
      <input onChange={onChange} value={key} type="text" placeholder="Search..."></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"continue"} click={onClick} />
    </div>
  );
}

export default App;
