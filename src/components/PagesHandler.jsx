import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import { publicRoutes, privateRoutes } from "../routes";
import { Preloader } from "./Preloader.jsx";

const PagesHandler = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <>
      {isAuth ? (
        <Switch>
          {privateRoutes.map((el) => {
            return (
              <Route
                path={el.path}
                component={el.component}
                exact={el.exact}
                key={el.path}
              />
            );
          })}
          <Redirect to="/posts" />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((el) => {
            return (
              <Route
                path={el.path}
                component={el.component}
                exact={el.exact}
                key={el.path}
              />
            );
          })}
          <Redirect to="/login" />
        </Switch>
      )}
      <Route path="/error" component={NotFoundPage} />
    </>
  );
};

export { PagesHandler };
