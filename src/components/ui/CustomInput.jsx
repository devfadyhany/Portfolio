const CustomInput = ({ type, placeholder }) => {
  if (type === "textArea") {
    return (
      <div className="col-span-2">
        <textarea
          placeholder={placeholder}
          rows="8"
          className="w-full border border-white/20 bg-white/10 px-6 py-5 text-white placeholder:text-white focus:placeholder:text-gray-600 focus:border-white focus:bg-white focus:text-black focus:outline-none focus:ring-1 focus:ring-white transition-all resize-none"
        ></textarea>
      </div>
    );
  }

  return (
    <div className="col-span-2 md:col-span-1">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full  border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white focus:placeholder:text-gray-600 focus:border-white focus:bg-white focus:text-black focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
      />
    </div>
  );
};

export default CustomInput;
