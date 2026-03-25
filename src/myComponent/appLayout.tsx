import { Outlet } from "react-router-dom";
import Navbar from "../myComponent/navBar";
import Footer from "@/pages/footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
