const express = require("express");
const topicsRouter = require("../topics/router");
const linksRouter = require("../links/router");
const server = express();
server.use(express.json());

server.use("/api/topics", topicsRouter);

server.use("/api/links", linksRouter);

server.get("/", (req, res) => {
  res.status(200).send("𝝺 node-server-testing-challenge");
});

module.exports = server;
