import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GraduationProject from "./components/GraduationProject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="section1" replace />} />

          <Route path="section1" element={<Projects />} />
          <Route path="section2" element={<Contact />} />
          <Route path="section3" element={<GraduationProject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
