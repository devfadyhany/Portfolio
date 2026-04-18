import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect base path to section1 so it's active by default */}
          <Route index element={<Navigate to="section1" replace />} />

          {/* These match the 'to' props in MultiSection */}
          <Route path="section1" element={<Projects />} />
          <Route path="section2" element={<Contact />} />
          <Route
            path="section3"
            element={<div className="text-white">Content 3</div>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
