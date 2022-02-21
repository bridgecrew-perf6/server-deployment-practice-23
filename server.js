"use strict";

const { req, res } = require("express");
const express = require("express");

const app = express();

function start(port) {
  app.listen(port, () => {
    console.log(`running on port ${port}`);
  });
}

app.get("/", (req, res) => {
  res.send("home route");
});

app.get("/data", (request, response) => {
  response.status(200).json({
    name: "Marah",
    email: "marahjaradat97@gmail.com",
  });
});

module.export = {
  app: app,
  start: start,
};
