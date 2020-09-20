import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));

const Routes = () => {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/salario-liquido" component={About} />
          <Route component={About} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;
