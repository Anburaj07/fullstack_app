const mongoose = require("mongoose");
const surveySchema = mongoose.Schema(
  {
    name: String,
    education: String,
    skills: String,
    gender: String,
    phone_Number: Number,
    email: String,
  },
  {
    versionKey: false,
  }
);

const surveyModel = mongoose.model("survey", surveySchema);

module.exports = { surveyModel };
