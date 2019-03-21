import React from "react";
import { Switch, Route } from "react-router-dom";

import Browse from "../Pages/browse";
import Playlist from "../Pages/Playlist";

// import { Container } from './styles';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
