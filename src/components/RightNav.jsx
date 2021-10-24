import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { GoGlobe, GoGraph } from "react-icons/go";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  .tab {
    display: flex;
    align-items: center;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    /* padding-bottom: 1.25rem; */
    justify-content: left;
    /* float: left; */
    border: none;
    outline: none;
    background-color: inherit;
    color: #e7e9f1;
    cursor: pointer;
    padding: 1.5rem 16px 1.5rem 16px;
    transition: 0.9s;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #002c58;
    opacity: 1; */
    background-color: rgba(24, 24, 24, 0.9);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -12px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link className="l" to="/">
          <button className="tab">
            <ImHome className="icon" />
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link className="l" to="/crypto">
          <button className="tab">
            <GoGraph className="icon" />
            Cryptocurrencies
          </button>
        </Link>
      </li>
      <li>
        {" "}
        <Link className="l" to="/news">
          <button className="tab">
            <GoGlobe className="icon" />
            News
          </button>
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
