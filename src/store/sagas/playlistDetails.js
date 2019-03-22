import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistDeatilsActions } from "../ducks/playlistDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );
    console.log("play", response);
    yield put(PlaylistDeatilsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    yield put(
      ErrorActions.setError("Não foi possível obter os dealhes da playlist")
    );
  }
}
