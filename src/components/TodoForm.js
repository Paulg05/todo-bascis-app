import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });
    setInput("");
  };

  return (
    <div>
      <form type="submit" className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo__input"
          placeholder="Add a to do"
          onChange={handleChange}
          value={input}
          name="text"
        />
        <button className="todo__button">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
