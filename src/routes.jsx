import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Watch from "./pages/Watch";
import Home from "./pages/Home";

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/watch" component={Watch} />
    </Switch>
  </BrowserRouter>
);
