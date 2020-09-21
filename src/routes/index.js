import React from "react";
import { Switch, Route } from "react-router-dom";
import NetSalary from "../pages/NetSalary";

const About = React.lazy(() => import("../pages/About"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/salario-liquido" component={NetSalary} />
      <Route component={About} />
    </Switch>
  )
};

export default Routes;
