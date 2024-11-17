import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main";
import Product from "./components/Product";
import Login from "./components/Login";
import WishList from "./components/WishList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/login", element: <Login/> },
        { path: "/product", element: <Product/> },
        { path: "/wishlist", element: <WishList/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
