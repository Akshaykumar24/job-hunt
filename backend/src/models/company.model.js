const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    short_name: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Company = mongoose.model("company", companySchema);

module.exports = Company;
