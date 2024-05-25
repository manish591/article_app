import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import logger from "./utils/logger";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "*",
  credentials: true,
}));

app.use(morgan("combined", {
  stream: {
    write: function(message) {
      logger.http(message);
    }
  }
}));

app.use("/api/v1", router);

export default app;