import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
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
`;

const Home = () => {
  return (
    <StyledDiv>
      <h3>Our Products</h3>
    </StyledDiv>
  );
};
export default Home;
