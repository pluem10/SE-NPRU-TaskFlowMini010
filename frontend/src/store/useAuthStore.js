import { create } from "zustand";
import { api, setAuth } from "../services/api";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("token"),

  login: async (data) => {
    const res = await api.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    setAuth(res.data.token);
    set({ token: res.data.token });
  },

  register: async (data) => {
    await api.post("/auth/register", data);
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));
