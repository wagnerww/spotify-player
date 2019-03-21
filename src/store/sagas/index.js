import { all, takeLatest } from "redux-saga/effects";
import { Types as PlaylistTypes } from "../ducks/playlist";

import { getPlaylist } from "./playlist";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistTypes.GET_REQUEST, getPlaylist)]);
}
