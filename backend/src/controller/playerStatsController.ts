import { NextFunction, Request, Response } from "express";
import { getPlayerId } from "../clients/mlbClient";

export const playerStatsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const playerId = await getPlayerId("Manny", "Machado");
  const dummyResponse = [
    {
      stats: playerId,
    },
  ];
  // if playerId

  //service call 2 taking in id
  // add data from headhsot to final response
  res.status(200).json(JSON.stringify(dummyResponse));
  next();
};
