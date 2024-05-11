import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./utils/logger";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "*"
}));

app.use(morgan("combined", {
  stream: {
    write: function(message) {
      logger.http(message);
    }
  }
}));

app.get("/healthcheck", function (req: Request, res: Response) {
  res.json({
    uptime: new Date(),
  });
});

export default app;