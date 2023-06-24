import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <div className="main">Main</div> },
      {
        path: "cart",
        element: <div>Cart</div>,
      },
      {
        path: "products",
        element: <div>Products</div>,
      },
      { path: "products/details", element: <div>Proudct Details</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
