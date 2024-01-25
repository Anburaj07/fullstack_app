import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AddSurvey from "../pages/AddSurvey";
import SingleSurvey from "./SingleSurvey";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add-survey" element={<AddSurvey />} />
      <Route path="/survey/:id" element={<SingleSurvey />} />
    </Routes>
  );
};

export default AllRoutes;
