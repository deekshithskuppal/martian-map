import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import api from "./routes/api.js";

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use("/api", api);
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.name === "ValidationError" ? 400 : 500).json({ error: error.message });
});

await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/martian_map");
app.listen(port, () => console.log(`Martian Map API listening on http://localhost:${port}`));
