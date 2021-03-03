import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import "./Todo.css";
import TodoTask from "./TodoTask";

function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTodo = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="header">Todo's List : ({tasksRemaining}) </div>
        <div className="create-task">
          <CreateTodo addTodo={addTodo} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <TodoTask
              task={task}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
