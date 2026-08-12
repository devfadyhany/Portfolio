import { useOutletContext } from "react-router";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import MultiSection from "../components/MultiSection";

const Home = () => {
  const { activeTab, setActiveTab } = useOutletContext();

  return (
    <>
      <Hero />
      <Skills />
      <MultiSection active={activeTab} onChange={setActiveTab} />
    </>
  );
};

export default Home;
