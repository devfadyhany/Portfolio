import CustomInput from "../ui/CustomInput";

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-16 text-white"
    >
      <div className="max-w-7xl container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center lg:items-end">
          <img
            src="src/assets/contact.png"
            className="w-full hidden lg:block"
          />
        </div>

        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center lg:text-left">
            Get In Touch
          </h1>

          <form className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <CustomInput type="text" placeholder="First Name" />
            <CustomInput type="text" placeholder="Last Name" />

            <CustomInput type="email" placeholder="Email Address" />
            <CustomInput type="tel" placeholder="Phone No." />

            <CustomInput type="textArea" placeholder="Message" />

            <a
              href="#contact"
              className="w-full lg:w-1/2 col-span-2 lg:col-span-1 relative font-semibold py-2 border border-white bg-white group overflow-hidden text-center mb-16"
            >
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition duration-300" />

              <span className="relative z-10 text-black group-hover:text-white transition duration-300">
                Send
              </span>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
