const express = require("express");
const dotenv = require("dotenv");

// load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `server is running on port ${process.env.PORT} mode on port ${PORT}`
  )
);
