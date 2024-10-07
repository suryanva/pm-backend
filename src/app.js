/**
 * @fileoverview Main application setup for the backend server.
 * @module app
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Project Management API",
  });
});

// Routes for the application

import projectRoutes from "./routes/project.routes.js";

// Mounting the user routes

app.use("/api/v1/projects", projectRoutes);

export default app;
