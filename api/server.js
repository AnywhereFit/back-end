const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/user-router");
const classesRouter = require("../api/classes/classes-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/classes", classesRouter);

server.get("/", (req, res) => {
  res.json("Api is up - Testing again!");
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
