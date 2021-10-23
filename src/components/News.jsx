import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import Article from "./Article";

const News = () => {
  const { news, isLoading } = useGlobalContext();
  const data = { news }.news.value;
  const tempData = data.slice(0, 4);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <>
      <Title>
        <h1>latest crypto news</h1>
        <Link className="showmore" to="/news">
          Show More
        </Link>
      </Title>

      <Wrapper>
        {tempData.map((item, index) => {
          return <Article key={index} {...item} />;
        })}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 30px;
  padding-left: -10px;
  background-color: #111;
  padding-bottom: 3rem;
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
`;
export default News;
