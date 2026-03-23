import { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

export default function Dashboard() {
  const { tasks, fetchTasks, createTask, deleteTask } = useTaskStore();
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    if (!title) return;
    createTask({ title });
    setTitle("");
  };

  return (
    <div className="dashboard">
      <h1>⚡ TaskFlow</h1>

      <input
        className="input"
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="btn" onClick={addTask}>
        Add Task
      </button>

      {tasks.map((t) => (
        <div key={t._id} className="task">
          <span>{t.title}</span>
          <button className="delete" onClick={() => deleteTask(t._id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
