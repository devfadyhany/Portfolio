import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
