import React from "react";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 2.5rem;
  font-size: 1rem;
  a {
    text-decoration: none;
    color: white;
    &:hover {
      font-size: 1.1rem;
      transition: 1s;
      color: #5aa637;
    }
    transition: 1s;
    @media (min-width: 800px) {
      font-size: 1.2rem;
    }
  }
`;

const StyledHeader = styled.header`
  background-color: black;
  .header_img {
    display: flex;
    justify-content: center;
  }
  .header_img img {
    width: 15;
    height: 15;
  }
`;
const Nav = () => {
  return (
    <StyledHeader>
      <div className="header_img">
        <img src={Logo} alt="Logo" />
      </div>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/about">About Us</Link>
        <Link to="/checkout">Checkout</Link>
      </StyledNav>
    </StyledHeader>
  );
};
export default Nav;
