import express from "express";
import morgan from "morgan";
import cors from "cors";

/**
 * This imports our router file so that requests can be directed accordingly.
 */
import { listRouter } from "./routes/list.js";

const app = express();

/**
 * This is our middleware which every request goes through before being routed.
 * Morgan creates logs in the terminal which contain data for each request made to the server.
 * The CORS middleware ensures that there are no CORS errors when making HTTP requests.
 */
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/**
 * This section is where we route requests based on their URI endpoint.
 */
app.use("/api/list", listRouter);

export default app;
