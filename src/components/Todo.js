import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { forwardRef, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 } from "uuid";
import {
  DeleteOutlineOutlined,
  DoneOutlineOutlined,
  EditOutlined,
} from "@material-ui/icons";

const Todo = forwardRef(() => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  useEffect(() => {
    const addLocal = () => {
      if (todos.length > 0) {
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    };
    addLocal();
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    const tasks = { text: input, key: v4(), complete: false };
    setTodos([...todos, tasks]);
    setInput("");
  };

  const deleteTodo = (e, key) => {
    e.preventDefault();
    let newTodos = todos.filter((todo) => todo.key !== key);
    setTodos(newTodos);
  };

  const editTodo = (e, key) => {
    e.preventDefault();
    todos.forEach((todo) => {
      if (todo.key === key) {
        setTodos(todo.text);
      }
    });
    let newTodos = todos.filter((todo) => todo.key !== key);
    setTodos(newTodos);
  };

  const completeTodo = (e, key) => {
    e.preventDefault();
    todos.forEach((todo) => {
      if (todo.key === key) {
        todo.complete = true;
      }
    });
    setTodos([...todos]);
  };

  return (
    <div className="todos">
      <form>
        <input
          className="todos__input"
          placeholder="Enter task for the day"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <IconButton
          aria-label="Add Entry"
          type="submit"
          className="todos__button"
          onClick={addTodo}
        >
          <AddIcon />
          <h3>Add Entry</h3>
        </IconButton>
      </form>

      <h2 className="todosList__header">Todo Entries</h2>
      <div className="todos__list">
        {todos.map((todo, key) => (
          <div className="todo" key={key}>
            {todo.complete === true ? (
              <div className="todo__complete">
                <h3 className="todoTitle__complete">{todo.text}</h3>
                <IconButton
                  aria-label="add"
                  type="submit"
                  onClick={(e) => deleteTodo(e, todo.key)}
                >
                  <DeleteIcon className="todo__completeDelete" />
                </IconButton>
              </div>
            ) : (
              <>
                <h3 className="todo__title">{todo.text}</h3>
                <div className="todo__icons">
                  <IconButton
                    aria-label="add"
                    type="submit"
                    onClick={(e) => completeTodo(e, todo.key)}
                  >
                    <DoneOutlineOutlined />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    type="submit"
                    onClick={(e) => editTodo(e, todo.key)}
                  >
                    <EditOutlined />
                  </IconButton>
                  <IconButton
                    aria-label="add"
                    type="submit"
                    onClick={(e) => deleteTodo(e, todo.key)}
                  >
                    <DeleteOutlineOutlined />
                  </IconButton>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Todo;
