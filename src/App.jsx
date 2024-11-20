import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main";
import Product from "./components/Product";
import Login from "./components/Login";
import WishList from "./components/WishList";
import ProductDetail from "./components/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Main/> },
        { path: "/login", element: <Login /> },
        { path: "/product", element: <Product /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/product/:id", element: <ProductDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
