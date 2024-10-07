import asyncHandler from "../../src/utils/asyncHandler.js";
import Project from "../models/project.model.js";
import { ApiError } from "../../src/utils/ApiError.js";
import { ApiResponse } from "../../src/utils/ApiResponse.js";

const getAllProjects = asyncHandler(async (req, res) => {
  const existingProjects = await Project.find().populate("tasks projectTeams"); // Fetches all projects with populated tasks and projectTeams

  if (existingProjects.length === 0) {
    throw new ApiError(404, "No projects found");
  }

  res.status(200).json(new ApiResponse(200, existingProjects));
});

export { getAllProjects };
