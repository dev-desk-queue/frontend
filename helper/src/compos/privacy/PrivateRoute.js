import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";


const PrivateRoute = PrivateRoute = ({ component: Component, errorStatusCode, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          //redirect
          console.log("Failed to login, Redirection!!");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
