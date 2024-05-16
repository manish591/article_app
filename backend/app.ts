import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./utils/logger";
import router from "./routes";

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

app.use("/api/v1", router);

export default app;