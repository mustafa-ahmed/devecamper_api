const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");

const bootcamps = require("./routes/bootcamps");

// load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV == "development") {
  app.use(morgan('dev'));
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `server is running on port ${process.env.PORT} mode on port ${PORT}`
  )
);
