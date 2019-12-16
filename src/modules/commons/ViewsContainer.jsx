import React from "react";
import { Route, Switch } from "react-router";
import Home from "../home/Home";

const ViewsContainer = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default ViewsContainer;
