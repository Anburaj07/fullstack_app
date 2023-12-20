import { Heading, Skeleton, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Survey from "../components/Survey";
import styled from "styled-components";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/surveys")
      .then((res) => {
        setLoading(false);
        console.log("res.data.surveyList", res.data.surveyList);
        setData(res.data.surveyList);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Heading marginTop={"25px"}>Survey List</Heading>
      {loading && (
        <Stack>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      )}

      <SURVEYLIST>
        {data.map((el) => (
          <Survey key={el._id} {...el} />
        ))}
      </SURVEYLIST>
    </div>
  );
};

export default Homepage;

const SURVEYLIST = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  div :hover {
    cursor: pointer;
  }
`;
