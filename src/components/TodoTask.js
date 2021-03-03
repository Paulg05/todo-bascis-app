import { Button } from "@material-ui/core";
import React from "react";

function TodoTask({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through 3px green" : "" }}
    >
      {task.title}
      <Button style={{ background: "red" }} onClick={() => removeTask(index)}>
        Delete
      </Button>
      <Button onClick={() => completeTask(index)}>Completed</Button>
    </div>
  );
}

export default TodoTask;

// function Task({ task, index, completeTask, removeTask }) {
//   return (
//     <div
//       className="task"
//       style={{
//         textDecoration: task.completed ? "line-through 3px green" : " ",
//       }}
//     >
//       {task.title}
//       <button style={{ background: "red" }} onClick={() => removeTask(index)}>
//         Delete
//       </button>
//       <button onClick={() => completeTask(index)}>Completed</button>
//     </div>
//   );
// }
