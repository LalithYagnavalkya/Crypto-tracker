import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useGlobalContext } from "../context/Context";

import CryptoCoins from "../components/CryptoCoins";
import News from "../components/News";

function Home() {
  const { data, extraData, isLoading, coins } = useGlobalContext();

  console.log(coins);
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
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="stats">
        <h1>Global Crypto Stats</h1>
        <div className="container">
          <div className="left">
            <article className="content">
              <p>active Cryptocurrencies</p>
              <h2>{data.data.active_cryptocurrencies}</h2>
            </article>
            <article className="content">
              <p>market cap change percentage 24h </p>
              <h2>
                {data.market_cap_change_percentage_24h_usd < 0 ? (
                  <span className={"icon dec"}>
                    <TiArrowSortedDown className="icon" />
                  </span>
                ) : (
                  <span className={"icon inc"}>
                    <TiArrowSortedUp />
                  </span>
                )}
                {Math.abs(
                  data.data.market_cap_change_percentage_24h_usd.toFixed(3)
                )}
              </h2>
            </article>
          </div>
          <div className="middle">
            <article className="content">
              <p>total market cap</p>
              {/* <h2>{formatNumber(extraData.data.totalMarketCap)}</h2> */}
              <h2>-</h2>
            </article>
            <article className="content">
              <p>Total 24h volume</p>
              {/* <h2>{formatNumber(extraData.data.total24hVolume)}</h2> */}
              <h2>-</h2>
            </article>
          </div>
          <div className="right">
            <article className="content">
              <p>total Exchanges</p>
              {/* <h2>{formatNumber(extraData.data.totalExchanges)}</h2> */}
              <h2>-</h2>
            </article>
            <article className="content">
              <p>total markets</p>
              {/* <h2>{formatNumber(extraData.data.totalMarkets)}</h2> */}
            </article>
          </div>
        </div>
      </div>
      <div className="crypto">
        <CryptoCoins />
      </div>
      <div className="news">
        <News />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  text-transform: capitalize;
  background-color: #292929;
  .stats,
  .crypto,
  .news {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 2.6rem;
    width: 80%;
    height: auto;
    background-color: var(--container-background-color);
    border-radius: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);

    /* font-family: "Montserrat", sans-serif; */
  }
  .crypto {
    /* background-color: #6617cb;
    background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%); */
  }

  .stats h1 {
    margin-left: 95px;
    margin-top: 3rem;
  }
  .icon {
    padding-top: 5px;
  }
  .dec {
    color: red;
  }
  .inc {
    color: green;
  }
  .container {
    position: relative;
    margin-right: 1rem;
    padding: 1.2rem;
    padding-left: 6rem;
    display: flex;
  }
  .content h2 {
    display: flex;
    align-items: center;
  }

  .container p {
    font-size: 14px;
    margin-bottom: -13px;
  }
  .container > * {
    flex-basis: 100%;
  }
  @media (max-width: 1024px) {
    .stats {
      .content {
        max-width: 140px;
      }
    }
  }
  @media (max-width: 768px) {
    .stats {
      .container {
        display: grid;
        .content {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  @media (max-width: 440px) {
    .stats,
    .crypto,
    .news {
      display: flex;
    }
    .stats h1 {
      margin-left: 1rem;
      margin-top: 3rem;
    }

    .stats {
      .container {
        margin-left: 0;
        padding-left: 1rem;
      }
    }
  }
`;

export default Home;
