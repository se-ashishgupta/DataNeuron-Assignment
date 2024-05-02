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

// Home Route
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome, Website is Working on ${process.env.FRONTEND_URL} click <a href=${process.env.FRONTEND_URL}>here</a></h1>`
  );
});

// Using Error Middleware
app.use(ErrorMiddleware);
