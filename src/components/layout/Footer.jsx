import SocialList from "../ui/SocialList";

function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 size-[300px] -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/40 blur-[100px]" />
        <div className="absolute bottom-0 left-0 size-[300px] translate-y-1/3 -translate-x-1/4 rounded-full bg-gradient-to-tr from-blue-600/40 to-cyan-400/40 blur-[100px]" />
      </div>

      <div className="max-w-7xl container mx-auto mt-16 px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex justify-center items-center gap-2">
            <img src="/favicon.svg" alt="Logo" className="h-8 w-auto" />
            <span className="hidden lg:block font-bold text-3xl tracking-tight">
              Portfolio
            </span>
          </div>
          <SocialList />
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>--© Copyrights 2026-- All Rights Reserved Here By devfadyhany.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
