const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

// centralized error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;