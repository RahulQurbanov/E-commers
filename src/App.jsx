import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main";
import Product from "./components/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/login", element: <Login /> },
        { path: "/product", element: <Product/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
