import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistActions } from "../ducks/playlist";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylist() {
  try {
    const response = yield call(api.get, "/playlists");
    console.log("play", response);
    yield put(PlaylistActions.getPlaylistsSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError("Não foi possível obter as playlists"));
  }
}
