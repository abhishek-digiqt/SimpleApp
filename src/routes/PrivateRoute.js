import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { getToken } from "../utils/helper";

const PrivateRoute = ({ component: Component, rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]).isRequired,
  rest: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PrivateRoute;
