import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { PORT } from "./utils/constants";
import logger from "./utils/logger";

app.listen(PORT, function() {
  logger.info("Successfully connected");
});