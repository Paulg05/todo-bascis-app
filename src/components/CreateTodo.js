import { useState } from "react";

import React from "react";

function CreateTodo({ addTodo }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <form type="submit" onSubmit={handleChange}>
        <input
          type="text"
          className="input"
          value={input}
          placeholder="add a new to do"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default CreateTodo;

// function CreateTodo({ addTask }) {
//   const [value, setValue] = useState(" ");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!value) return;
//     addTask(value);
//     setValue("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="input"
//         value={value}
//         placeholder="Add a new to do"
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </form>
//   );
// }
