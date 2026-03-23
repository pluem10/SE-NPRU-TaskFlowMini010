import { create } from "zustand";
import { api } from "../services/api";

export const useTaskStore = create((set) => ({
  tasks: [],

  fetchTasks: async () => {
    const res = await api.get("/tasks");
    set({ tasks: res.data });
  },

  createTask: async (data) => {
    const res = await api.post("/tasks", data);
    set((s) => ({ tasks: [res.data, ...s.tasks] }));
  },

  deleteTask: async (id) => {
    await api.delete(`/tasks/${id}`);
    set((s) => ({
      tasks: s.tasks.filter((t) => t._id !== id),
    }));
  },
}));
