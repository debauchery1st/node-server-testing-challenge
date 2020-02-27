const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("𝝺 node-server-testing-challenge");
});

module.exports = server;
