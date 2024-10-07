import { Router } from "express";
import {
  getAllProjects,
  createProject,
} from "../controllers/project.controller.js";

const router = Router();

router.get("/getprojects", getAllProjects);
router.post("/createproject", createProject);

export default router;
