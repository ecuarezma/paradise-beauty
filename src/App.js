import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./components/contexts/lang.context";

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
      { path: "/", element: <Home /> },
      { path: "/nails", element: <Nails /> },
    ],
  },
]);

const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};

export default App;
