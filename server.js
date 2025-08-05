import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import cors from "cors";
import userController from "./controllers/userController.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

// Database Connection
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bachelor_point",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

// Middleware
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Routes
app.use("/api/users", userController);

// Server
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
