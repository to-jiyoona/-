import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LandingPageV2 } from "./pages/LandingPageV2";
import { LandingPageV3 } from "./pages/LandingPageV3";
import { LandingPageV4 } from "./pages/LandingPageV4";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/v2",
    element: <LandingPageV2 />,
  },
  {
    path: "/v3",
    element: <LandingPageV3 />,
  },
  {
    path: "/v4",
    element: <LandingPageV4 />,
  },
]);