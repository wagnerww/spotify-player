import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="">
        <img
          src="https://yt3.ggpht.com/a-/AAuE7mC2hlN_ADhWeJdS8aY0tY2qm9Ik_upljJPrJw=s900-mo-c-c0xffffffff-rj-k-no"
          alt=""
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce ouve esta playlist!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
