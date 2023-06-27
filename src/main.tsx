import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProductsPage from "./pages/productsPage.tsx";
import CartPage from "./pages/cartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
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
