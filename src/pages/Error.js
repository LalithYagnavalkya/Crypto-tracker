import React from "react";
import styled from "styled-components";

function Error() {
  return (
    <Wrapper>
      <div className="">
        <h1>Error </h1>
        <h2>Page not Found</h2>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* background-color: #ddf30c; */
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #fff;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 900;
    }
  }
`;

export default Error;
