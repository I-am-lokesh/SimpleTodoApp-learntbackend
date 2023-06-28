import express from "express";
import {
  newTask,
  myTasks,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/myTasks", isAuthenticated, myTasks);

router.route("/:id")
.put(isAuthenticated,updateTask)
.delete(isAuthenticated,deleteTask);

export default router;
