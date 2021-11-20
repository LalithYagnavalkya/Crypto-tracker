import React from "react";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Coin from "./Coin";

const CryptoCoins = () => {
  const { coins, isLoading } = useGlobalContext();

  const uio = coins.slice(0, 10);
  //   const {id, symbol, name,image,current_price,low_24h,price_change_percentage_24h,market_cap_rank}

  if (isLoading) {
    <div className="loading">
      <h1>Loading</h1>
    </div>;
  }

  return (
    <>
      <Title>
        <h1>Top 10 Cryptocurrencies in the world</h1>
        <Link className="showmore" to="/crypto">
          Show More
        </Link>
      </Title>
      <Wrapper>
        {/* <div className="container"></div> */}
        {uio.map((item, index) => {
          const {
            id,
            symbol,
            name,
            image,
            current_price,
            low_24h,
            price_change_percentage_24h,
            market_cap_rank,
            market_cap,
          } = item;

          return <Coin key={index} {...item} />;
        })}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 30px;
  /* background-color: #111; */
  /* background-color: #6617cb;
  background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%); */

  @media (max-width: 440px) {
    /* display: none; */
    overflow-x: hidden;
    /* display: grid; */
    h1 {
      font-size: 1.5rem;
    }
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2.5rem;
  padding: 10px;
  margin-top: 1.9rem;
  /* width: 70%; */

  .showmore {
    margin-right: 1rem;
    font-size: 1.4rem;
    font-weight: 800;
    text-decoration-line: none;
    text-decoration: none;
    color: #5175eb;
  }

  .showmore:hover {
    color: #db40c6;
  }

  @media (max-width: 440px) {
    /* display: none; */
    display: grid;
    overflow-x: hidden;
    margin-left: 1rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default CryptoCoins;
