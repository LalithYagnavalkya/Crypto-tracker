import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Home, Crypto, News, SingleCrypto, Error } from "./pages";

function App() {
  return (
    <Wrapper>
      <Router>
        <ScrollToTop />
        <div className="navbar">
          <Navbar />
        </div>
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/crypto">
              <Crypto />
            </Route>
            <Route path="/cryptos/:id">
              <SingleCrypto />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  bottom: 0;
  padding-bottom: 100px;
  min-height: 100vh;
  width: 100%;
  position: relative;
  /* background-color: #222; */
  background-color: #292929;

  /* background-color: #6617cb;
  background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%); */
  /* background-color: black; */

  .navbar {
    position: relative;
    display: flex;
    width: 17.5rem;
    min-width: 17.5rem;
    max-width: 17.5rem;
    display: flex;
    flex: 0.3;
    left: 0;
  }
  .page {
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
  }
  @media (max-width: 1005px) {
    display: flex;
    flex-direction: column;
    .navbar {
      position: relative;
      display: flex;
      align-items: center;
      min-width: 100vw;
      max-height: 100px;
      flex: 0.3;
      /* margin-top: 100px; */
    }
    .page {
      display: flex;
      position: relative;
      margin-top: 100px;
      flex: 1;
    }
  }
`;

export default App;
