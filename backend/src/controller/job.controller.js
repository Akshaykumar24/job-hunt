const express = require("express");
const Job = require("../models/job.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json({ job });
});

// router.get("/", async (req, res) => {
//   const jobs = await Job.find().lean().exec();
//   res.status(201).json({ jobs });
// });

router.get("/:id", async (req, res) => {
  const jobs = await Job.findById(req.params.id)
    .populate("company")
    .lean()
    .exec();
  res.status(200).json({ jobs });
});

router.get("/", async (req, res) => {
  let location = req.query.location;
  let title = req.query.title;
  if (location && title) {
    const jobs = await Job.find({ location: location, title: title })
      .populate("company")
      .lean()
      .exec();
    return res.status(200).json({ jobs });
  } else if (location) {
    const jobs = await Job.find({ location: location })
      .populate("company")
      .lean()
      .exec();
    return res.status(200).json({ jobs });
  } else if (title) {
    const jobs = await Job.find({ title: title })
      .populate("company")
      .lean()
      .exec();
    return res.status(200).json({ jobs });
  }
  const jobs = await Job.find().populate("company").lean().exec();
  return res.status(200).json({ jobs });
});
module.exports = router;
