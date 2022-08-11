import React from "react";

export default function TaskCard({ task, setTask }) {
  return (
    <>
      <div key={task.id} className="col-sm-6 col-md-3 container card m-1">
        <span>
          {task.name}{" "}
          <input
            type="checkbox"
            name=""
            value={task.done}
            id=""
            onChange={() => setTask(task)}
          />
        </span>
      </div>
    </>
  );
}
