import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="flex  justify-center text-3xl text-red-400 items-center p-6">Hello world!</div>,
  }, 
  {
    path: "/about",
    element: <div className="flex  justify-center text-3xl text-red-400 items-center p-6">I am now at about page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);