import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LandingPageV2 } from "./pages/LandingPageV2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/v2",
    element: <LandingPageV2 />,
  },
]);