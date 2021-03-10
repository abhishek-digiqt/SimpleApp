import { lazy } from "react";

const MemberDetails = lazy(() => import("../container/memberDetails"));

const routes = [
  {
    path: "/member-details",
    exact: true,
    name: "Member Details",
    component: MemberDetails,
    private: false,
  },
];

export default routes;
