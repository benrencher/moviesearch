"use strict"

const express = require("express");
const server = express();
const port = 8080;

server.listen(port, () => {
  console.log(`server is up and running on port: ${port}`)
});