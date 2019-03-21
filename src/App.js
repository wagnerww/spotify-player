import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/reactotron";

import { GlobalStyle } from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import { Container, Wrapper, Content } from "./styles/components";

import store from "./store";

import Routes from "./Routes";

const src = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default src;
