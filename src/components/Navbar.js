import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "./Nav";
//icons
import { ImHome } from "react-icons/im";
import { GoGlobe, GoGraph } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import Hamburger from "hamburger-react";
import { slide as Menu } from "react-burger-menu";

// import PublicIcon from "@mui/icons-material/Public";
function Navbar() {
  return (
    <>
      <Wrapper>
        <div className="title">
          <img src="/logo.png" className="logo" alt="image" />
          <h1>Coin Script</h1>
        </div>
        <nav>
          <div className="my-menu">
            <Nav />
          </div>
          <div className={`tabs `}>
            <div className={` tabs `}>
              <Link className="l" to="/" onClick={() => {}}>
                <button className="tab">
                  <ImHome className="icon" />
                  Home
                </button>
              </Link>
              <Link className="l" to="/crypto">
                <button className="tab">
                  <GoGraph className="icon" />
                  Cryptocurrencies
                </button>
              </Link>
              <Link className="l" to="/news">
                <button className="tab">
                  <GoGlobe className="icon" />
                  News
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.nav`
  position: fixed;
  /* z-index: 1; */
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  width: inherit;
  height: 100%;
  color: #e7e9f1;
  background-color: var(--container-background-color);
  /* background-color: #7f5a83;
  background-image: linear-gradient(315deg, #cc2b5e 0%, #753a88 74%); */
  overflow: hidden;
  .l {
    color: inherit;
    text-decoration: none;
  }
  .l :hover {
    background-color: #e7e9f1;
    color: #000;
  }
  .my-menu {
    display: none;
    background-color: white;
  }
  .title {
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
    margin-bottom: 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
  }
  .title h1 {
    /* font-weight: 900; */
    letter-spacing: 2px;
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

  .icon {
    font-size: 1.25rem;
    margin-right: 1.3rem;
  }
  .logo {
    margin-left: 0.8rem;
    margin-right: 0.7rem;
    height: 2.5rem;
  }

  @media (max-width: 1024px) {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    /* nav{
          width: 100vw;
          display: flex;
          
        } */
    .tabs {
      display: flex;
      width: 100%;
      flex-direction: row;
    }
    .tabs :hover {
      background-color: inherit;
      color: #5175eb;
    }
    .icon {
      display: none;
    }
  }
  @media (max-width: 640px) {
    .my-menu {
      display: inline;
    }
    .tabs {
      display: none;
    }
    .l :hover {
      background-color: rgba(24, 24, 24, 0.9);
      color: white;
    }
    @media (max-width: 440px) {
      /* display: none; */
      overflow-x: hidden;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Navbar;
