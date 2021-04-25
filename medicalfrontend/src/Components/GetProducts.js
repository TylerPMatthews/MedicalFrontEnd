import React, { useEffect, useState } from "react";
import axios from "axios";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
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
    border: 1px solid white;
    font-size: 1.4rem;
  }
  .price p:nth-of-type(1) {
    color: green;
  }

  .price p:nth-of-type(2) {
    color: red;
  }
.add{
  color:#5aa637;
}
`;

const GetProducts = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    axios
      .get("http://localhost:59283/viewproducts")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log("Get products error", err);
      });
  }, []);
  return (
    <div>
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
                <IconButton variant='outlined' className='add'><AddShoppingCartIcon/></IconButton>
              </div>
          
             
            </div>
          </StyledDiv>
        );
      })}
    </div>
  );
};
export default GetProducts;
