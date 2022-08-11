import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContainer({
  title,
  taskItems,
  toggleTask,
  setTaskItems,
  showCompleted = false,
}) {
  const taskCardsRender = (doneValue) => {
    return taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => <TaskCard task={task} setTask={toggleTask} />);
  };

  const handleDelete = () => {};
  return (
    <div className="container p-3">
      <h3>
        {title}{" "}
        {showCompleted && (
          <button className="btn btn-danger" onClick={handleDelete}>
            {" "}
            Delete tasks
          </button>
        )}
      </h3>
      <div className="row">{taskCardsRender(showCompleted)}</div>
    </div>
  );
}
