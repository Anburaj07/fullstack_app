import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Heading, Text } from "@chakra-ui/react";

const SingleSurvey = () => {
  const { id } = useParams();
  // console.log('id:', id)
  const [survey, setSurvey] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/surveys/${id}`)
      .then((res) => {
        console.log(res.data.surveyList);
        setSurvey(res.data.surveyList);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {survey.map((el) => (
        <DIV>
          <Heading as={"h3"} size={"md"}>
            Name: {el.name}
          </Heading>
          <Text>Education Level: {el.education}</Text>
          <Text>Skills: {el.skills}</Text>
          <Text>Gender: {el.gender}</Text>
          <Text>Phone Number: {el.phone_Number}</Text>
          <Text>Email: {el.email}</Text>
        </DIV>
      ))}
    </div>
  );
};

export default SingleSurvey;

const DIV = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 25px;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 15px;
  text-align: center;
`;
