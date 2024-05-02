import express from "express";
import "dotenv/config";
import cors from "cors";
import ErrorMiddleware from "./middleware/Error.js";

//Server Intialization
export const app = express();

// Using Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cors Configuration
app.use(cors());

//Importing and Using Routes
import route from "./routes/routes.js";

app.use("/api/v1", route);

// Using Error Middleware
app.use(ErrorMiddleware);
