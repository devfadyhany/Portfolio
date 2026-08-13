import { useState } from "react";
import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Outlet context={{ activeTab, setActiveTab }} />
      <Footer />
    </>
  );
}

export default Layout;
