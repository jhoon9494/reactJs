import { useState } from "react/cjs/react.development";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    setTodoArray((prevArray) => [todo, ...prevArray]);
    setTodo("");
  };
  return (
    <div>
      <h1>todo list</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="write your to do"></input>
        <button>click</button>
      </form>
      <hr />
      <ul>
        {todoArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
