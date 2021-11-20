import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  /* display: flex; */
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
