import React from "react";
import { Switch, Route } from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/salario-liquido" component={About} />
      <Route component={About} />
    </Switch>
  )
};

export default Routes;
