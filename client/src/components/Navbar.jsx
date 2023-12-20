import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <DIV>
      <Link to={"/"}>
        <Heading size={"xl"} as={"h2"}>Survey Taking System</Heading>
      </Link>
      <Link to={"/add-survey"}>
        <Heading size={"xl"} as={"h3"}>Add Survey</Heading>
      </Link>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  display: flex;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  justify-content: space-around;
  padding: 1%;
`;
