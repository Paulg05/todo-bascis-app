import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["task 1", "task 2", "task 3"]);
  const [input, setInput] = useState("");
  // console.log(input);

  const addTodo = (e) => {
    e.preventDefault();
    console.log("im working");
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
