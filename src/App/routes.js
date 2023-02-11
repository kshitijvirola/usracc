import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "container/Login";
// import Register from "container/Register";
import Dashboard from "container/Dashboard";
import PageLoader from "components/PageLoader";
import { getAuthUserID } from "modules/helper";
const routes = [
  {
    path: "/login",
    exact: true,
    AuthRoute: false,
    component: Login,
  },
  // {
  //   path: "/register",
  //   exact: true,
  //   AuthRoute: false,
  //   component: Register,
  // },
  {
    path: "/",
    exact: true,
    AuthRoute: true,
    component: Dashboard,
  },
  {
    path: "/dashboard",
    exact: true,
    AuthRoute: true,
    component: Dashboard,
  },
];
const PrivateRoute = ({ component: Component, ...rest }) => {
  if (getAuthUserID()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else return <Redirect to="/login" />;
};
const RestrictedRoute = ({ component: Component, publicAccess, ...rest }) => {
  if (getAuthUserID()) {debugger
    return (
      <Route
        {...rest}
        render={(props) =>
          publicAccess ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  } else
    return <Route {...rest} render={(props) => <Component {...props} />} />;
};
class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {routes.map((route, index) => {
            return !route.AuthRoute ? (
              <RestrictedRoute {...route} key={index} />
            ) : (
              <PrivateRoute {...route} key={index} />
            );
          })}
          <Route render={(props) => <h1>404 Page</h1>} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;
