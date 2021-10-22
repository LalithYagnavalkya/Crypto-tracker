import React from "react";

import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { coins } from "../components/CryptoCoins";
import { useGlobalContext } from "../context/Context";
import Article from "../components/Article";
const News = () => {
  const { results, updateSearch } = useGlobalContext();
  // const data = JSON.stringify(results);
  const fewCoins = coins.slice(0, 10);

  return (
    <Wrapper>
      <div className="search">
        <form action="" className="searchform">
          <select
            type="text"
            list="userInput"
            placeholder="Search here"
            required
            className="searchbar"
            onChange={(e) => {
              updateSearch(e.target.value);
            }}
          >
            {fewCoins.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div id="parentID" className="news-container">
        {results.map((item, index) => {
          return <Article key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
  background-color: inherit;

  .search {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    /* background-color: blue; */
    /* justify-content: left; */
  }
  .searchbar {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    /* outline: none; */
    width: 100%;
    border-radius: 10px;
    margin: 2.5rem auto;
    padding: 0.5rem;
    .icon {
      font-size: 20px;
      margin-right: 15px;
      color: black;
    }
  }

  .search select {
    margin-left: 13px;
    /* height: 100%; */
    /* padding: 0.3rem; */
    width: 200px;
    outline: none;
  }
  .searchbar button {
    outline: none;
    border: none;
    background-color: inherit;
  }

  .news-container {
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
    position: sticky;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    border-radius: 30px;
    min-height: 100vh;
    height: 100%;
    min-width: 80%;
    width: 80%;
    background-color: var(--container-background-color);
  }
`;
export default News;
