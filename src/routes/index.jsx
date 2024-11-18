import * as React from "react";
import LoadingScreen from "../ui/legacy/Loading";
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default function Routers() {
  return useRoutes([
    // User Dashboard Routes
    {
      path: "dashboard",
      children: [
        {
          path: "config",
          element: <AllAsset />,
        },
        {
          path: "generator",
          element: <FundInfo />,
        },
        {
          path: "404",
          element: <FundInfo />,
        },
      ],
    },

    // Main Routes
  ]);
}

// DASHBOARD

// ASSET
const AllAsset = Loadable(React.lazy(() => import("../pages/asset/Asset")));

const FundInfo = Loadable(
  React.lazy(() => import("../pages/fundsList/FundsList"))
);
// const FundDetail = Loadable(React.lazy(() => import("../pages/fund/detail")));
