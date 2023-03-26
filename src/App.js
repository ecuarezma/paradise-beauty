import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home";
import Nails from "./components/pages/Nails";

import RootLayout from "./components/Layouts/RootLayout";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />
    children: [
      { index: true, element: <Home /> },
      { path: "nails", element: <Nails /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
