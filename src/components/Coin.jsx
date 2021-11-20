import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Coin = ({
  id,
  symbol,
  name,
  image,
  current_price,
  low_24h,
  price_change_percentage_24h,
  market_cap_rank,
  market_cap,
}) => {
  const { updatDatefrom } = useGlobalContext();
  let ranges = [
    { divider: 1e18, suffix: "E" },
    { divider: 1e15, suffix: "P" },
    { divider: 1e12, suffix: "T" },
    { divider: 1e9, suffix: "B" },
    { divider: 1e6, suffix: "M" },
    { divider: 1e3, suffix: "k" },
  ];

  function formatNumber(n) {
    for (var i = 0; i < ranges.length; i++) {
      if (n >= ranges[i].divider) {
        if (ranges[i].suffix === "T" || "E") {
          return (
            (n / ranges[i].divider).toFixed(1).toString() + ranges[i].suffix
          );
        }
        return (n / ranges[i].divider).toFixed(2).toString() + ranges[i].suffix;
      }
    }
    return n.toString();
  }
  return (
    <Card>
      <Link
        className="clickable"
        onClick={() => {
          updatDatefrom("1", id);
        }}
        to={`/cryptos/${id}`}
      >
        <header>
          <h3>{id}</h3>
          <img src={image} alt="" className="icon" />
        </header>
        <div className="content">
          <p>price: ${formatNumber(current_price)}</p>
          <p>Market cap: {formatNumber(market_cap)}</p>
          <p>Daily Change: {price_change_percentage_24h.toFixed(2)}%</p>
        </div>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  background-color: #1e1e1e;
  text-transform: capitalize;
  height: 18rem;
  min-width: 16rem;
  margin: 4rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  transition: 0.5s;
  /* :hover {
    box-shadow: 8px 8px 6px 0px rgb(44, 44, 44);
  } */
  .clickable {
    text-decoration: none;
    list-style-type: none;
    color: inherit;
    line-height: inherit;
  }

  :hover {
    /* background-color: transparent; */
    /* opacity: 0.5; */
    /* background-color: #6617cb; */
    background-color: #292929;

    /* background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
    backdrop-filter: blur(6px);
    */
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  }

  header {
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.1rem solid #3f3f3f;
  }
  .content {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;
    padding: 1.25rem;
    font-weight: 900;
    font-size: 12px;
  }

  .icon {
    height: 2.5rem;
  }
  @media (max-width: 440px) {
    /* display: none; */
    overflow-x: hidden;
    /* display: grid; */
    min-width: 200px;
  }
`;

export default Coin;
