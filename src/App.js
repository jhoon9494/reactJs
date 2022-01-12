import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed"); //Cleanup
  }, []);
  return <h1>Hi</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      {show ? <Hello /> : null}
      <Button text={show ? "hide" : "show"} click={onClick} />
    </div>
  );
}

export default App;
