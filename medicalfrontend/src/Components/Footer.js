import React from "react";
import styled from "styled-components";
import image from "../Images/logo.png";
const StyledFooter = styled.footer`
  margin-top: 5rem;
  color: black;
  padding: 1rem;
  p {
    text-align: center;
  }

  .footertxt {
    padding: 2rem;
  }
  .footerimg {
    display: flex;
    justify-content: center;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className="footertxt">
        <p>Green Orchard 2021 &copy;</p>
      </div>
      <div className="footerimg">
        <img src={image} alt="logo" />
      </div>
    </StyledFooter>
  );
};
export default Footer;
