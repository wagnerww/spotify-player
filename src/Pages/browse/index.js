import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistActions } from "../../store/ducks/playlist";

import { Container, Title, List, Playlist } from "./styles";

class Browse extends Component {
  componentDidMount() {
    const { getPlaylistsRequest } = this.props;

    getPlaylistsRequest();
  }
  render() {
    return (
      <Container>
        <Title>Navegar</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlist/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
