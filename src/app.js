/**
 * @fileoverview Main application setup for the backend server.
 * @module app
 */

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
/**ap * Middleware to enable Cross-Origin Resource Sharing (CORS). * Allows requests from the specified origin and includes credentials.re * @see {@link https://expressjs.com/en/resources/middleware/cors.html|cors} */ app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);
/** * Middleware to parse incoming JSON requests. * Limits the request body size to 16kb. * @see {@link https://expressjs.com/en/api.html#express.json|express.json} */
app.use(express.json({ limit: "16kb" }));
/** * Middleware to parse incoming URL-encoded requests.
 * Limits the request body size to 16kb.
 * @see {@link https://expressjs.com/en/api.html#express.urlencoded|express.urlencoded}
 */
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

/**
 * Middleware to serve static files from the "public" directory.
 * @see {@link https://expressjs.com/en/starter/static-files.html|express.static}
 */
app.use(express.static("public"));

/**
 * Middleware to parse cookies attached to the client request object.
 * @see {@link https://expressjs.com/en/resources/middleware/cookie-parser.html|cookie-parser}
 */
app.use(cookieParser());

export default app;
