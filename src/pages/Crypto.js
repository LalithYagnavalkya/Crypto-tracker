import React, { useState } from "react";
import styled from "styled-components";
import Coin from "../components/Coin";
import { BsSearch } from "react-icons/bs";
import { useGlobalContext } from "../context/Context";

function Crypto() {
  const { coins, isLoading } = useGlobalContext();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );
  if (isLoading) {
    <div className="loading">
      <h1>Loading</h1>
    </div>;
  }
  return (
    <Wrapper>
      <div className="search">
        <div className="search-bar">
          <form action="" onSubmit={handleSubmit}></form>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search Cryptocurrency"
          />
          <button type="submit">
            <BsSearch className="icon" />
          </button>
        </div>
      </div>

      <div
        className={` ${filteredCoins.length <= 4 ? "cryptoend" : "cryptos"}`}
      >
        {!query
          ? coins.map((item, index) => {
              return <Coin key={index} {...item} />;
            })
          : filteredCoins.map((item, index) => <Coin key={index} {...item} />)}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #fff;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: #292929;

  .cryptoend {
    display: flex;
    padding-left: 40px;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    border-radius: 30px;
    min-height: 100vh;
    height: 100%;
    width: 80%;
    background-color: var(--container-background-color);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  }
  .search {
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .search-bar {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    background-color: #1e1e1e;
    border-radius: 30px;
    margin: 2.5rem auto;
    padding: 0.5rem;
    .icon {
      font-size: 20px;
      margin-right: 15px;
      color: grey;
    }
  }
  .search-bar input {
    background-color: #1e1e1e;
    margin-left: 13px;
    height: 100%;
    padding: 0.3rem;
    color: grey;
    width: 230px;
    border: none;
    outline: none;
  }
  .search-bar button {
    outline: none;
    border: none;
    background-color: inherit;
  }

  .cryptos {
    display: flex;
    position: sticky;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    border-radius: 30px;
    min-height: 100vh;
    height: 100%;
    width: 80%;
    background-color: var(--container-background-color);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  }
`;

export default Crypto;
