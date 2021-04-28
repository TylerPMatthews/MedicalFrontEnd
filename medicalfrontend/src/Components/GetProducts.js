import React, { useEffect, useState } from "react";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addToCartCount } from "../Actions/cartActions";

const StyledDiv = styled.div`
  box-shadow: 2px 2px 18px;
  color: #5aa637;
  border: 1px solid black;
  margin: 2.5rem;
  @media (min-width: 700px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  @media (min-width: 850px) {
    margin-left: 8rem;
    margin-right: 8rem;
  }
  @media (min-width: 1000px) {
    margin-left: 18rem;
    margin-right: 18rem;
  }
  @media (min-width: 1200px) {
    margin-left: 22rem;
    margin-right: 22rem;
  }
  text-align: center;
  font-size: 1.1rem;
  @media (min-width: 700px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 850px) {
    p {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 1200px) {
    p {
      font-size: 1.5rem;
    }
  }
  .img_wrapper {
    display: flex;
    justify-content: center;
  }
  img {
    height: 17rem;
    width: 17rem;
  }
  .content {
    background-color: black;
    color: white;
    padding: 1rem;
  }
  .content p {
    margin: 1rem;
  }
  .content p:nth-of-type(1) {
    color: #5aa637;
  }
  .price {
    background-color: white;
    color: #5aa637;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
  }
  .price p {
    padding: 0.5rem;
    margin: 1rem;
    font-size: 1.4rem;
    text-align: center;
  }
  .price button {
    text-align: center;
    font-size: 1.2rem;
    &:hover {
      background-color: #5aa637;
      color: black;
      transition: 1s;
    }
    transition: 0.5s;
  }
  .price p:nth-of-type(1) {
    color: #5aa637;
    border: 1px solid #5aa637;
  }

  .price p:nth-of-type(2) {
    color: red;
    border: 2px solid #5aa637;
  }
  .add {
    color: #5aa637;
  }
`;

const StyledHead = styled.div`
  .sort_wrapper {
    display: flex;
    justify-content: center;
  }
  .sort_wrapper button {
    color: #5aa637;
    font-size: 0.7rem;
    @media (min-width: 700px) {
      font-size: 1rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.1rem;
    }
  }
`;

const GetProducts = (props) => {
  const [items, setItems] = useState([]);
  const [initItems, setInitItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://medical-cannabis-backend.herokuapp.com/viewproducts")
      .then((res) => {
        setItems(res.data);
        setInitItems(res.data);
      })
      .catch((err) => {
        console.log("Get products error", err);
      });
  }, []);

  const sortByType = (type) => {
    const data = {
      item_type: type,
    };
    axios
      .post(
        "https://medical-cannabis-backend.herokuapp.com/viewproducts/type",
        data
      )
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log("Sort error", err);
      });
  };

  return (
    <StyledHead>
      <div className="sort_wrapper">
        <Button
          onClick={() => {
            sortByType("flower");
          }}
        >
          Flower
        </Button>
        <Button
          onClick={() => {
            sortByType("cart");
          }}
        >
          Carts
        </Button>
        <Button
          onClick={() => {
            sortByType("edible");
          }}
        >
          Edibles
        </Button>
        <Button
          onClick={() => {
            sortByType("concentrate");
          }}
        >
          Concentrates
        </Button>
        <Button
          onClick={() => {
            sortByType("topical");
          }}
        >
          Topicals
        </Button>
     <div>
     <Button
          onClick={() => {
            setItems(initItems);
          }}
        >
          Clear
        </Button>
     </div>
      </div>

      {items.map((item, idx) => {
        const alertItem = JSON.stringify(item.item_name);
        return (
          <StyledDiv key={idx}>
            <div className="card_wrapper">
              <div className="img_wrapper">
                <img src={item.item_img} alt={item.item_name} />
              </div>
              <div className="content">
                <p>{item.company_name}</p>
                <p>{item.item_name}</p>
                <p>THC {item.item_thc}%</p>
                <p>CBD {item.item_cbd}%</p>
                <p>Type: {item.item_type}</p>
              </div>
              <div className="price">
                <p>${item.item_price}</p>
                <IconButton
                  variant="outlined"
                  className="add"
                  onClick={() => {
                    props.addToCartCount();
                    props.inCart.push(item);
                    window.alert(`${alertItem} has been added to cart.`);
                  }}
                >
                  Add
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          </StyledDiv>
        );
      })}
    </StyledHead>
  );
};
const mapStateToProps = (state) => {
  return {
    inCart: state.cart.inCart,
  };
};

export default connect(mapStateToProps, { addToCartCount })(GetProducts);
