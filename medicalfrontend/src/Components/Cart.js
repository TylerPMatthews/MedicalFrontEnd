import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { removeFromCartCount } from "../Actions/cartActions";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

//Styles
const StyledDiv = styled.div`
  text-align: center;
  font-size: 1.4rem;
  margin: 2rem;
  border: 1px solid black;
  padding:1rem;
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
`;

const StyledCart = styled.div`
  text-align: center;
  .name_wrapper {
    margin: 2rem;
  }
  .title_wrapper {
    margin: 2rem;
  }
  .title_wrapper p {
    font-size: 1rem;
  }
  .name_wrapper p {
    font-size: 1.5rem;
    margin:1rem;
  }
  .name_wrapper p:nth-of-type(2) {
    color: #5aa637;
  }
  .card_wrapper {
    border: 1px solid black;
    margin: 2rem;
    background-color: #f4f3ef;
  }

  .total {
    margin: 2rem;
    padding:1rem;
  }
  .total p {
    font-size: 1.2rem;
    @media (min-width: 700px) {
      font-size: 1.3rem;
    }
    @media (min-width: 850px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1000px) {
      font-size: 1.6rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.8rem;
    }
  }
  .total {
    border: 1px solid black;
  }
  .checkout {
    margin: 2rem;
  }
  .checkout button {
    font-size: 1rem;
    background-color: #5aa637;
    color: white;
    &:hover {
      background-color: black;
      color: #5aa637;
      transition: 1s;
    }
    transition: 0.5s;
  }
`;
const Cart = (props) => {
  //push to new page
  const { push } = useHistory();
  //Find total
  const total = props.inCart.reduce((n, { item_price }) => n + item_price, 0);
  //Find tax
  const tax = Math.round(total * 0.07);
  //Add total + tax
  const final = total + tax;

  return (
    <>
      <StyledDiv>
        <h3>Cart</h3>
      </StyledDiv>
      <StyledCart>
        {props.inCart.map((item, idx) => {
          return (
            <div key={idx} className="card_wrapper">
              <div key={idx} className="title_wrapper">
                <p>{item.company_name}</p>
              </div>
              <div className="name_wrapper">
                <p>{item.item_name}</p>
                <p>$ {item.item_price}</p>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    let index = idx;
                    props.inCart.splice(index, 1);
                    props.removeFromCartCount();
                  }}
                >
                  <RemoveShoppingCartIcon />
                </IconButton>
              </div>
            </div>
          );
        })}
        <div className="total">
          <p>Subtotal: ${total}.00</p>
          <p>Sales Tax: ${tax}.00</p>
          <p>Total: ${final}.00</p>
        </div>

        <div className="checkout">
          {props.loggedIn === true ? (
            <Button
              variant="outlined"
              onClick={() => {
                push("/checkoutform");
              }}
            >
              Checkout
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                push("/login");
              }}
            >
              Login
            </Button>
          )}
        </div>
      </StyledCart>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.cartCount,
    inCart: state.cart.inCart,
    loggedIn: state.logged.loggedIn,
  };
};

export default connect(mapStateToProps, { removeFromCartCount })(Cart);
