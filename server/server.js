import { app } from "./app.js";
import { connectDB } from "./database/database.js";

// Database Connect
connectDB();

// Listing on Port
app.listen(process.env.PORT, () => {
  console.log(`Server is Connected on Port: ${process.env.PORT}`);
});
