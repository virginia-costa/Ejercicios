import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Uno from "./Components/Uno/Uno";
import Dos from "./Components/Dos/Dos";

const Router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/uno", element: <Uno /> },
  { path: "/dos", element: <Dos /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
