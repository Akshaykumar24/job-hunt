const express = require("express");

const app = express();
app.use(express.json());

const start = async () => {
  app.listen(port, () => {
    connect();
    console.log("listening on port " + port);
  });
};

module.exports = start;
