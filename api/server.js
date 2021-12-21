const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const classesRouter = require("./classes/classes-router");
const usersRouter = require("./users/auth-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use("/api/classes", classesRouter);
server.use("/api/users", usersRouter);

server.get("/", async (req, res) => {
  res.json("Welcome to Fitness Everywhere App");
});
server.get("/api", async (req, res) => {
  res.json("api is up");
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
