const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bootcamps = require("./routes/bootcamps");
const connectDB = require("./config/db");
const colors = require("colors");

// load env variables
dotenv.config({ path: "./config/config.env" });

// connect databse
connectDB();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5001;

const server = app.listen(
  PORT,
  console.log(
    `server is running on port ${process.env.PORT} mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => {
    process.exit(1);
  });
});
