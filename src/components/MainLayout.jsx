import { Outlet } from "react-router-dom";
import Header from "./Header";
import Catagory from "./Catagory";
import Footer from "./Footer";
import Product from "./Product"; 
import ProductDetail from "./ProductDetail";
import AddToCard from "./AddToCard";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Catagory />
      {/* <Outlet />  */}
      <AddToCard/>
      {/* <ProductDetail/> */}
      <Footer />
    </div>
  );
}
