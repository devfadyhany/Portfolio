import SocialList from "./SocialList";

function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 text-white">
      <div className="skills-container absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl transform rounded-3xl p-8 shadow-2xl md:p-12">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h2 className="text-2xl font-bold lg:text-3xl">
            See My Projects At Once & leave Here Your E-mail Address
          </h2>

          <div className="relative flex w-full max-w-md items-center overflow-hidden rounded-full border-2 border-cyan-600 p-1">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent px-6 py-3 outline-none placeholder:text-gray-400"
            />
            <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto mt-16 px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo/Brand */}
          <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>

          {/* Social Icons */}
          <SocialList />
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>--© Copyrights 2026-- All Rights Reserved Here By Fady Hany.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
