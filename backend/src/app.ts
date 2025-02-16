import cors from "cors";
import express, { Request, Response } from "express";
import playerStatsRoute from "./routes/playerStatsRoute";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], optionsSuccessStatus: 200 }));

app.use("/v1/", playerStatsRoute);
// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
