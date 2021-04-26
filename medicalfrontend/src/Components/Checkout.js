import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { clearCartCount, clearCartItems } from "../Actions/cartActions";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
const StyledDiv = styled.div`
  text-align: center;
  font-size: 1.4rem;
  margin: 2rem;
  border: 1px solid black;
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
const Checkout = (props) => {
  const { push } = useHistory();
  const total = props.inCart.reduce((n, { item_price }) => n + item_price, 0);
  const tax = Math.round(total * 0.07);
  const final = total + tax;
  let nameArr = [];
  props.inCart.map((item, idx) => {
    nameArr.push(item.item_name);
    return nameArr;
  });

  const postData = {
    order_product_names: nameArr,
    order_price: final,
    user_id: props.user_id,
  };

  return (
    <>
      <StyledDiv>
        <h3>Checkout</h3>
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
          <Button
            variant="outlined"
            onClick={() => {
              axios
                .post("http://localhost:59283/users/orders", postData)
                .then((res) => {
                  props.clearCartCount();
                  props.clearCartItems();
                  window.alert("Order has been submitted!");
                  push("/");
                })
                .catch((err) => {
                  console.log("New order POST error", err);
                });
            }}
          >
            Submit Order
          </Button>
        </div>
      </StyledCart>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    inCart: state.cart.inCart,
    user_id: state.user.user_id,
  };
};

export default connect(mapStateToProps, { clearCartCount, clearCartItems })(
  Checkout
);
