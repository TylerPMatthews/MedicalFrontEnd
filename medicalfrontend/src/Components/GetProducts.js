import React, { useEffect, useState } from "react";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const StyledDiv = styled.div`
  margin: 2rem;
  border-radius: 10px;
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
      font-size: 1.4rem;
    }
  }
  .img_wrapper {
    display: flex;
    justify-content: center;
  }
  img {
    height: 15rem;
    width: 15rem;
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
    background-color: black;
    color: white;
    padding: 1.5rem;
  }
  .price p {
    display: inline;
    padding: 0.5rem;
    margin: 1rem;
    border: 2px solid white;
    font-size: 1.4rem;
    text-align: center;
  }
  .price button {
    text-align: center;
    font-size: 1.2rem;
    border: 2px solid white;
    &:hover {
      background-color: #5aa637;
      color: black;
      transition: 1s;
    }
    transition: 0.5s;
  }
  .price p:nth-of-type(1) {
    color: green;
  }

  .price p:nth-of-type(2) {
    color: red;
  }
  .add {
    color: #5aa637;
  }
  .sort_wrapper {
    display: flex;
    justify-content: space-evenly;
  }
`;

const GetProducts = () => {
  const [items, setItems] = useState([]);
  const [initItems, setInitItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:59283/viewproducts")
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
      .post("http://localhost:59283/viewproducts/type", data)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log("Sort error", err);
      });
  };
  return (
    <div>
      <div className="sort_wrapper">
        <button
          onClick={() => {
            sortByType("flower");
          }}
        >
          Flower
        </button>
        <button
          onClick={() => {
            sortByType("cart");
          }}
        >
          Carts
        </button>
        <button
          onClick={() => {
            sortByType("edible");
          }}
        >
          Edibles
        </button>
        <button
          onClick={() => {
            sortByType("concentrate");
          }}
        >
          Concentrates
        </button>
        <button
          onClick={() => {
            sortByType("topical");
          }}
        >
          Topicals
        </button>
        <button
          onClick={() => {
            setItems(initItems);
          }}
        >
          Clear
        </button>
      </div>

      {items.map((item, idx) => {
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
              </div>
              <div className="price">
                <p>${item.item_price}</p>
                <p>Stock: {item.inventory_count}</p>
                <IconButton variant="outlined" className="add">
                  Add
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          </StyledDiv>
        );
      })}
    </div>
  );
};
export default GetProducts;
