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
      element: <MainLayout />, // MainLayout her sayfada olacak
      children: [
        { path: "/", element: <Main /> }, // Ana sayfa
        { path: "/login", element: <Login /> }, // Login sayfası
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
