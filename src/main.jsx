import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./pages/ProductList";
import "./styles/GlobalStyle.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductList/>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/checkout",
        element: <CheckOut/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/my-orders",
        element: <Orders/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
