import { useOutletContext } from "react-router";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import MultiSection from "../components/ui/MultiSection";
import NewsletterCTA from "../components/ui/NewsletterCTA";

const Home = () => {
  const { activeTab, setActiveTab } = useOutletContext();

  return (
    <>
      <Hero setActiveTab={setActiveTab} />
      <Skills />
      <MultiSection active={activeTab} onChange={setActiveTab} />
      <NewsletterCTA />
    </>
  );
};

export default Home;
