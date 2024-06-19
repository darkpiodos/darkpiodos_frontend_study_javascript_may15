import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App";
import LearnJavascipt from "./practice/javascript/LearnJavascipt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/learn-javascript",
    element: <LearnJavascipt />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
