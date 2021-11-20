import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import FusionCrypto from "../components/FusionCrypto";
import { useGlobalContext } from "../context/Context";

function SingleCrypto() {
  const { days, extraData, updatDatefrom, coinHistory, coinData, isLoading } =
    useGlobalContext();
  const currentCoin = coinData;
  console.log(coinData);
  console.log(coinHistory);
  console.log(currentCoin);
  const [description, setDescription] = useState();
  const [stats, setStats] = useState();
  const params = useParams();

  // const number = coinData.market_data.current_price.usd;

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

  useEffect(() => {
    updatDatefrom(7, params.id);
  }, []);

  if (isLoading || coinData === null) {
    return (
      <div className="loading">
        <center>
          <h1>Loading...</h1>
        </center>
      </div>
    );
  }

  return (
    <Page>
      <div className="container">
        <header>
          <h1>{currentCoin.name} Price</h1>
          <p>
            {currentCoin.name} live price in US dollars. View value statistics,
            market cap and supply
          </p>
        </header>
        <div className="content">
          <div className="header">
            <div className="forDays">
              <form action="">
                <select
                  defaultValue="7"
                  value={days}
                  action=""
                  onChange={(e) => {
                    updatDatefrom(e.target.value, params.id);
                  }}
                  className="searchform"
                >
                  <option value="1">1 days</option>
                  <option value="7">7 days</option>
                  <option value="30">1 month</option>
                  <option value="365">1 year</option>
                  <option value="730">2 year</option>
                  <option value="1095">3 year</option>
                </select>
              </form>
            </div>
            <div className="title">
              <h2>{currentCoin.name} Price Chart</h2>
              <h3>
                current Pirce: $
                {formatNumber(currentCoin.market_data.current_price.usd)}
              </h3>
            </div>
          </div>
          <div className="chart">
            <FusionCrypto dataset={coinHistory} />
          </div>
          <div className="stats">
            <div className="currentStats">
              <h2>{coinData.name} Value Statistics</h2>
              <p>An overview showing the stats of Bitcoin</p>
              <div className="stackInfo">
                <ul>
                  <li>
                    price to USD
                    <span>
                      ${formatNumber(coinData.market_data.current_price.usd)}
                    </span>
                  </li>
                  <li>
                    Rank <span>{formatNumber(coinData.market_cap_rank)}</span>
                  </li>
                  <li>
                    24h Volume
                    <span>
                      {formatNumber(coinData.market_data.total_volume.usd)}
                    </span>
                  </li>
                  <li>
                    Market Cap
                    <span>
                      ${formatNumber(coinData.market_data.market_cap.usd)}
                    </span>
                  </li>
                  <li>
                    All-time-high(daily avg.)
                    <span>
                      {formatNumber(coinData.market_data.high_24h.usd)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

const Page = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  background-color: inherit;
  display: flex;
  justify-content: center;
  ul {
    list-style-type: none;
    /* margin-left: -10px; */
    display: inline-block;
    li {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      line-height: 1.9;
      border-bottom: 1px solid black;
      span {
        color: white;
        font-weight: bolder;
      }

      :hover {
        background-color: grey;
        /* color: black; */
        cursor: default;
      }
    }
  }

  h1 {
    text-transform: capitalize;
    color: #36b5d8;
  }
  .chart {
  }

  .container {
    flex-direction: column;
    /* background-color: violet; */
    display: flex;
    justify-content: center;
    height: 100%;
    width: 93%;

    header {
      text-align: center;
      /* display: flex; */
      flex: 0.1;
      /* background-color: blueviolet; */
      border-bottom: 1px solid white;
    }
    select {
      width: 8rem;
      height: 1.4rem;
    }
    .content {
      padding-top: 1rem;
      flex: 0.75;
      display: flex;
      flex-direction: column;

      .header {
        .title {
          display: flex;
          justify-content: space-between;
          /* padding: 0 1rem; */
        }
      }
      .stats {
        display: flex;
        align-items: center;
        flex-direction: column;

        .currentStats {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          h1,
          h2,
          p {
            display: flex;
            justify-content: center;
          }
          h2 {
            color: #36b5d8;
          }
          ul {
            width: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        }
        .otherStats {
          width: 100%;
          h1,
          h2,
          p {
            display: flex;
            justify-content: center;
          }
          h2 {
            color: #36b5d8;
          }
          ul {
            width: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        }
        p {
          font-size: 10px;
          font-weight: 900;
          color: #909090;
        }

        .description p {
          line-height: 100px;
        }
      }
    }
  }
  @media (max-width: 768px) {
  }
`;

export default SingleCrypto;
