import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import A2Context from "./context-switch/A2.jsx";
import InfiniteColor from "./changingcolor/colorchange.jsx";

const router = createBrowserRouter([
  {
    path: "/contextSwitch",
    element: <A2Context />,
  },
  {
    path: "/color",
    element: <InfiniteColor />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
