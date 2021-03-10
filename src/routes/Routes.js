import { lazy } from "react";

const HomePage = lazy(() => import("../container/index"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: HomePage,
    private: false,
  },
];

export default routes;
