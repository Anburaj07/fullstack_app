import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  RadioGroup,
  Stack,
  Radio,
  Heading,
} from "@chakra-ui/react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddSurvey = () => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [gender, setGender] = useState("");
  const [phNo, setPhNo] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      education,
      skills,
      gender: value,
      phone_Number: +phNo,
      email,
    };
    console.log(obj);
    axios
      .post("http://localhost:8080/add-survey", obj)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
        <Heading>Survey</Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Education Level</FormLabel>
          <Select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="">Select your Education Level</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Degree">Degree</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Skills</FormLabel>
          <Select value={skills} onChange={(e) => setSkills(e.target.value)}>
            <option value="">Select your Skill</option>
            <option value="Singing">Singing</option>
            <option value="Dancing">Dancing</option>
            <option value="Drawing">Drawing</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="number"
            value={phNo}
            onChange={(e) => setPhNo(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </DIV>
  );
};

export default AddSurvey;

const DIV = styled.div`
  width: 40%;
  margin: auto;
  form {
    margin-top: 40px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 15px;
    border-radius: 15px;
    div {
      margin-bottom: 20px;
    }
    background-color: whitesmoke;
  }
`;
