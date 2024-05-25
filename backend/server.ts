import dotenv from "dotenv";
dotenv.config();

import { Request, Response, NextFunction } from "express";
import app from "./app";
import { PORT } from "./utils/constants";
import logger from "./utils/logger";

app.listen(PORT, function() {
  logger.info("Successfully connected");
});

app.use(function (req, res, next) {
  next(new Error("404"));
});

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "404 not found",
    data: {},
    meta: {},
  });

  next();
});