import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Survey = ({
  _id,
  name,
  education,
  skills,
  gender,
  phone_Number,
  email,
}) => {
  const navigte = useNavigate();
  return (
    <DIV onClick={() => navigte(`/survey/${_id}`)}>
      <Heading as={"h3"} size={"md"}>
        Name: {name}
      </Heading>
      <Text>Education Level: {education}</Text>
      <Text>Skills: {skills}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Phone Number: {phone_Number}</Text>
      <Text>Email: {email}</Text>
    </DIV>
  );
};

export default Survey;

const DIV = styled.div`
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 15px;
  text-align: left;
`;
