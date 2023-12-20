const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connection } = require("./db");
dotenv.config();
app.use(express.json());
const cors = require("cors");
const { surveyModel } = require("./Models/survey.model");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Survey BasePoint" });
});

app.get("/surveys", async (req, res) => {
  try {
    const surveyList = await surveyModel.find();
    res.status(200).json({ surveyList });
  } catch (error) {
    console.log("error:", error);
  }
});

app.post("/add-survey", async (req, res) => {
  try {
    const payload = req.body;
    console.log("payload:", payload);
    const newSurvey = new surveyModel(payload);
    await newSurvey.save();
    res.status(200).json({ newSurvey });
  } catch (error) {
    console.log("error:", error);
  }
});
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB Successfully");
    console.log("Server Running at 8080");
  } catch (error) {
    console.log("Error while Connecting to DB");
    console.log("error:", error);
  }
});
