import { useTaskStore } from "../store/useTaskStore";

export default function TaskCard({ task }) {
  const { deleteTask } = useTaskStore();

  return (
    <div className="card bg-neutral shadow-xl p-4 border border-green-500">
      <h2 className="text-lg text-primary">{task.title}</h2>

      <p className="text-sm opacity-70">{task.status}</p>

      <div className="flex gap-2 mt-3">
        <button className="btn btn-sm btn-warning">Edit</button>
        <button
          className="btn btn-sm btn-error"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
