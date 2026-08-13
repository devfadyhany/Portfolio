function NewsletterCTA() {
  return (
    <div className="relative z-10 -mt-30">
      <div className="skills-container mx-auto -mb-24 w-[90%] max-w-5xl rounded-3xl p-8 shadow-2xl md:p-12">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h2 className="text-2xl font-bold lg:text-3xl text-center lg:text-left">
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
    </div>
  );
}

export default NewsletterCTA;
