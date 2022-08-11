import { useState } from "react";

export default function TaskCreator({ createNewTask }) {
  const [newTask, setNewTask] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    setNewTask("");
    createNewTask(newTask);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          className="form-control mb-2"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button className="btn btn-primary border-0">Save task</button>
      </form>
    </div>
  );
}
