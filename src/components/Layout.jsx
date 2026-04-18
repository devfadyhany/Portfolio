import { Outlet } from "react-router";
import Hero from "./Hero";
import MultiSection from "./MultiSection";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <MultiSection />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
