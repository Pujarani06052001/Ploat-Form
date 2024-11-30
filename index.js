import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import plotRoutes from "./routes/plotRoutes.js";

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cors());


// Connect to MongoDB
const MONGO_URI = "mongodb+srv://paras22:BB2orhb1NHhtvT0J@cluster0.gejab.mongodb.net/Backend_datap?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB URI
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/", plotRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
