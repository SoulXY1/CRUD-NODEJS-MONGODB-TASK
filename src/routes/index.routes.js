import { Router } from "express";

import {
  renderTasks,
  createTasks,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/task.controller";

const router = Router();

//See Tasks
router.get("/", renderTasks);

//Save
router.post("/tasks/add", createTasks);

//Done
router.get("/tasks/:id/toogleDone", taskToggleDone);

//Edit
router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit", editTask);

//Delete
router.get("/tasks/:id/delete", deleteTask);

export default router;
