import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main";
import Login from "./components/Login";
import WishList from "./components/WishList";
import ProductDetail from "./components/ProductDetail";
import CategoryProduct from "./components/CategoryProduct";
import AddToCard from "./components/AddToCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/login", element: <Login /> },
        { path: "/category-product", element: <CategoryProduct /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/product-detail", element: <ProductDetail /> },
        { path: "/add-card", element: <AddToCard /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />  // RouterProvider ilə sarmalama
  );
}

export default App;
