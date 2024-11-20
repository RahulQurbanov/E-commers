import { Outlet } from "react-router-dom";
import Header from "./Header";
import Catagory from "./Catagory";
import Footer from "./Footer";
import Breadcrumb from "./BreadCrumb"; 

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Catagory />
      <Breadcrumb />
      <Outlet /> 
      <Footer />
    </div>
  );
}
