import contact from "../assets/contact.png";

function CustomInput({ type, placeholder }) {
  return (
    <div className="col-span-2 md:col-span-1">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white focus:placeholder:text-gray-600 focus:border-white focus:bg-white focus:text-black focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
      />
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 pb-32 pt-16 text-white"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center lg:items-end">
          <img src={contact} className="w-full hidden lg:block" />
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

            <div className="col-span-2">
              <textarea
                placeholder="Message"
                rows="8"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-white placeholder:text-white focus:placeholder:text-gray-600 focus:border-white focus:bg-white focus:text-black focus:outline-none focus:ring-1 focus:ring-white transition-all resize-none"
              ></textarea>
            </div>

            <a
              href="#contact"
              className="w-full lg:w-1/2 col-span-2 lg:col-span-1 relative font-semibold py-2 border border-white bg-white group overflow-hidden text-center mb-8"
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

export default Contact;
