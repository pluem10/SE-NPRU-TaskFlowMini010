import express from "express";
import { register, login, me } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
//localhost:5000/api/auth/register
router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, me);

export default router;
