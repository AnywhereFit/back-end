const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restrict = require("./middleware/restricted");
const authRouter = require("./auth/auth-router");

const server = express();
server.use(express.static(path.join(__dirname, "../client")));
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
// server.use("/api/somethingrestricted", restrict, somethingrestrictedRouter); // only logged-in users should have access!

// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })

// server.post('/api/users', async (req, res) => {
//   res.status(201).json(await insertUser(req.body))
// })

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
