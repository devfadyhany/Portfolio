import { Outlet } from "react-router";
import Hero from "./Hero";
import MultiSection from "./MultiSection";
import Navbar from "./Navbar";
import Skills from "./Skills";

function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <MultiSection />
      <Outlet />
    </>
  );
}

export default Layout;
