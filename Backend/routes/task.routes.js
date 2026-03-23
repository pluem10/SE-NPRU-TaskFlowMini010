import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
// localhost:5000/api/tasks 
router.use(protect);
//localhost:5000/api/tasks
router.post("/", createTask);
//localhost:5000/api/tasks
router.get("/", getTasks);
//localhost:5000/api/tasks/:id
router.put("/:id", updateTask);
//localhost:5000/api/tasks/:id
router.delete("/:id", deleteTask);

export default router;
