import React from "react";
import { Switch, Route } from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/salario-liquido" component={About} />
      <Route component={NotFound} />
    </Switch>
  )
};

export default Routes;
