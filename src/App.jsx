import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout"; // MainLayout bileşenini import et
import Main from "./components/Main";
import Login from "./components/Login";
import Footer from "./components/Footer";
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
