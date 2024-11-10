import { Outlet } from "react-router-dom";
import Header from "./Header"; // Düzeltilmiş
import Catagory from "./Catagory"; // Düzeltilmiş
import Footer from "./Footer"; // Düzeltilmiş
import Product from "./Product"; // Düzeltilmiş

export default function MainLayout() {
  return (
    <div>
      <Header />
      {/* <Catagory /> */}
      <Product/>
      {/* <Outlet />  */}
      <Footer />
    </div>
  );
}
