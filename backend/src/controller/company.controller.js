const express = require("express");
const Company = require("../models/company.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const companies = await Company.find().lean().exec();
  res.status(201).json({ companies });
});

router.post("/", async (req, res) => {
  const company = await Company.create(req.body);
  res.status(201).json({ company });
});

module.exports = router;
