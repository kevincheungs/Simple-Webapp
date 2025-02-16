import express from "express";
import { playerStatsController } from "../controller/playerStatsController";

const statsRoute = express.Router();

statsRoute.get("/players", playerStatsController);

export default statsRoute;
