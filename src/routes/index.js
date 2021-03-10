import React, { Suspense, memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Loader } from "../components/CommonComponent";
import ErrorBoundary from "../components/ErrorBoundary";
import PrivateRoute from "./PrivateRoute";
import RoutesFile from "./Routes";

const Routes = memo(() => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            {RoutesFile.map((itm) =>
              itm.private ? (
                <PrivateRoute
                  key={itm.name}
                  exact={itm.exact}
                  path={itm.path}
                  name={itm.name}
                  component={itm.component}
                />
              ) : (
                <Route
                  key={itm.name}
                  exact={itm.exact}
                  path={itm.path}
                  name={itm.name}
                  component={itm.component}
                />
              )
            )}
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
});

export default Routes;
