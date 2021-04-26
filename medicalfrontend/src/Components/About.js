import React from "react";
import styled from "styled-components";
//Styles
const StyledDiv = styled.div`
  text-align: center;
  h3 {
    text-align: center;
    font-size: 1.4rem;
    margin: 2rem;
    @media (min-width: 700px) {
      font-size: 1.6rem;
    }
    @media (min-width: 850px) {
      font-size: 1.8rem;
    }
    @media (min-width: 1000px) {
      font-size: 1.9rem;
    }
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
  a {
    text-decoration: none;
    color: #5aa637;
  }
`;
const About = () => {
  return (
    <StyledDiv>
      <h3>Front End Code</h3>
      <a
        href="https://github.com/TylerPMatthews/MedicalFrontEnd"
        target="#blank"
      >
        Github Link
      </a>
      <h3>Back End Code</h3>
      <a
        href="https://github.com/TylerPMatthews/Medical-Backend"
        target="#blank"
      >
        Github Link
      </a>
    </StyledDiv>
  );
};
export default About;
