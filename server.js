"use strict";
const express = require("express");
const db = require("./db.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from an Express Web Server running in Node!");
});

app.get("/data", (req, res) => {
  db.retrieveName(clientFunction);

  function clientFunction(password) {
    res.send("here is your data: " + password);
  }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


