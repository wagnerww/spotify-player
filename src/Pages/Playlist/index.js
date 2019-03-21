import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../Assets/assets/images/clock.svg";
import PlusIcon from "../../Assets/assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://yt3.ggpht.com/a-/AAuE7mC2hlN_ADhWeJdS8aY0tY2qm9Ik_upljJPrJw=s900-mo-c-c0xffffffff-rj-k-no"
        alt=""
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>
    <SongList>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin park</td>
          <td>Hybrid Teory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin park</td>
          <td>Hybrid Teory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin park</td>
          <td>Hybrid Teory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin park</td>
          <td>Hybrid Teory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin park</td>
          <td>Hybrid Teory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
