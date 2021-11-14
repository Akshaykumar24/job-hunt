const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./utils/db");
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const companyController = require("./controller/company.controller");
const jobController = require("./controller/job.controller");

app.use("/job", jobController);
app.use("/company", companyController);

const start = async () => {
  app.listen(port, () => {
    connect();
    console.log("listening on port " + port);
  });
};

module.exports = start;
