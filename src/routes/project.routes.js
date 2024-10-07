import { Router } from "express";
import { getAllProjects } from "../controllers/project.controller.js";

const router = Router();

router.get("/getprojects", getAllProjects);

export default router;
