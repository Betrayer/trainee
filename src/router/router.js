import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const LazyHome = lazy(
  () =>
    import(
      "../components/pages/homePage/HomePage"
    ) /* webpackChunkName: 'Home' */
);

const LazyTemplate = lazy(
  () =>
    import(
      "../components/pages/templatePage/TemplatePage"
    ) /* webpackChunkName: 'Template' */
);

const Lazy404 = lazy(
  () =>
    import(
      "../components/pages/notFoundPage/NotFoundPage"
    ) /* webpackChunkName: '404' */
);

export const useRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          <p>Loading...</p>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={LazyHome} />
        <Route exact path="/template" component={LazyTemplate} />
        <Route exact path="*" component={Lazy404} />
      </Switch>
    </Suspense>
  );
};
