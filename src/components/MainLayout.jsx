// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Catagory from "./Catagory";
// import Footer from "./Footer";
// import Product from "./Product"; 
// import ProductDetail from "./ProductDetail";
// import AddToCard from "./AddToCard";

// export default function MainLayout() {
//   return (
//     <div>
//       <Header />
//       <Catagory />
//       {/* <AddToCard/> */}
//       <Outlet /> 
//       {/* <ProductDetail/> */}
//       <Footer />
//     </div>
//   );
// }
// MainLayout.js
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Catagory from "./Catagory";
import Footer from "./Footer";
import Breadcrumb from "./BreadCrumb"; // Breadcrumb-u daxil edirik

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Catagory />
      <Breadcrumb /> {/* Breadcrumb komponenti buradadır */}
      <Outlet /> 
      <Footer />
    </div>
  );
}
