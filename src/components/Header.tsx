const Header = () => {
  return (
    <div className="flex flex-row justify-between items-end p-8 font-mono uppercase shadow-md px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-col items-start">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-none tracking-wide">
          Component
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1434cb] tracking-tight leading-none tracking-wide">
          Suggestion
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-500 tracking-tight leading-none mb-1 tracking-wide">
          Tool
        </span>
        <span className=" text-base sm:text-lg md:text-xl font-semibold text-gray-600  border-l-4 border-[#1434cb] pl-2">
          Lynsie Aragon
        </span>
      </div>
      <div className="flex gap-8 font-semibold text-gray-600 font-mono uppercase  text-base sm:text-lg md:text-xl">
        <a
          href="https://github.com/Lynsiearagon/component-suggestion-tool/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          Code
        </a>
        <a
          href="https://www.linkedin.com/in/lynsie-aragon-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          LinkedIn
        </a>
        <a
          href="https://lynsiearagon.github.io/Lynsie-portfolio/LynsieAragonResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
