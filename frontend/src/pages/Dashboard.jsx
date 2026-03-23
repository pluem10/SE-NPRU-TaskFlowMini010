import Sidebar from "../components/Sidebar";
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
    <div style={{ display: "flex", background: "#020617", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "30px", width: "100%" }}>
        {/* TITLE */}
        <h1
          style={{
            color: "#22c55e",
            fontSize: "28px",
            marginBottom: "20px",
            textShadow: "0 0 10px #22c55e",
          }}
        >
          ⚡ Task Dashboard
        </h1>

        {/* INPUT */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new task..."
            style={{
              flex: 1,
              padding: "12px",
              background: "#020617",
              border: "1px solid #22c55e",
              color: "white",
              borderRadius: "8px",
            }}
          />

          <button
            onClick={addTask}
            style={{
              padding: "12px 20px",
              background: "#22c55e",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 10px #22c55e")}
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
          >
            Add
          </button>
        </div>

        {/* TASK LIST */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "15px",
          }}
        >
          {tasks.map((t) => (
            <div
              key={t._id}
              style={{
                background: "#0f172a",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #22c55e",
                color: "#22c55e",
                transition: "0.3s",
                boxShadow: "0 0 5px rgba(34,197,94,0.3)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 15px #22c55e")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 5px rgba(34,197,94,0.3)")
              }
            >
              <h3 style={{ marginBottom: "10px" }}>{t.title}</h3>

              <button
                onClick={() => deleteTask(t._id)}
                style={{
                  background: "#ef4444",
                  border: "none",
                  padding: "6px 10px",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
