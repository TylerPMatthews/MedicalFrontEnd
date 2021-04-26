import React from "react";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 2.5rem;
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: white;
    &:hover {
      transition: 1s;
      color: #5aa637;
    }
    transition: 0.5s;
    @media (min-width: 700px) {
      font-size: 1.3rem;
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
    width: 20;
    height: 20;
  }
`;
const Nav = (props) => {
  return (
    <StyledHeader>
      <div className="header_img">
        <img src={Logo} alt="Logo" />
      </div>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">
          <ShoppingCartIcon /> {props.cartCount}
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};
const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(Nav);
