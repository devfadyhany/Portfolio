import NavTab from "./NavTab";

function MultiSection() {
  return (
    <section id="projects" className="bg-black text-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 mb-8">
          My name is Fady, I live in Giza, Imbabah, These are some of my
          projects.
        </p>

        <NavTab />
      </div>
    </section>
  );
}

export default MultiSection;
