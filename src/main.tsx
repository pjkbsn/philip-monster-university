import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { MonsterProvider } from "./components/MonsterProvider/MonsterProvider.tsx";
import { MonsterPage } from "./pages/MonsterPage.tsx";
import { MonsterAddPage } from "./pages/MonsterAddPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "monster/:id",
        element: <MonsterPage />,
      },
    ],
  },
  {
    path: "monster/add",
    element: <MonsterAddPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MonsterProvider>
      <RouterProvider router={router} />
    </MonsterProvider>
  </React.StrictMode>
);
