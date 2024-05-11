import winston from "winston";
const { json, combine, timestamp } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL ?? "http",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A"
    }),
    json()
  ),
  transports: [
    new winston.transports.Console(), 
    new winston.transports.File({ filename: "logs/app.log" })
  ],
  exitOnError: false,
});

export default logger;