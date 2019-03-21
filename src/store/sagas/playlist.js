import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistActions } from "../ducks/playlist";

export function* getPlaylist() {
  try {
    const response = yield call(api.get, "/playlists");
    console.log("play", response);
    yield put(PlaylistActions.getPlaylistsSuccess(response.data));
  } catch (error) {
    console.log("erro playlist", error);
  }
}
