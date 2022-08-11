import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskContainer from "./components/TaskContainer";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  const createNewTask = (taskName) => {
    if (taskName) {
      setTaskItems([
        ...taskItems,
        { id: new Date().getTime(), name: taskName, done: false },
      ]);
    }
  };

  const toggleTask = (selectTask) => {
    setTaskItems(
      taskItems.map((task) =>
        task.id === selectTask.id ? { ...task, done: !task.done } : task
      )
    );
    setShowComplete(true);
  };

  useEffect(() => {
    let data = localStorage.getItem("taskItems");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
    taskItems.find((taskItem) => taskItem.done && setShowComplete(true));
  }, [taskItems]);

  return (
    <div className="App container">
      <div className="container p-3">
        <TaskCreator createNewTask={createNewTask} />
        <div className="container mt-2">
          <TaskContainer
            title="Pending tasks"
            taskItems={taskItems}
            toggleTask={toggleTask}
          />
          {showComplete && (
            <>
              <TaskContainer
                title="Completed tasks"
                taskItems={taskItems}
                toggleTask={toggleTask}
                setTaskItems={setTaskItems}
                showCompleted
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
