function DarkModeToggle({ isDark, setIsDark }) {
  return (
    <button
      className="h-8 inline-flex items-center gap-2 rounded-full border border-slate-300/60 px-3 py-1 bg-slate-900/40 text-slate-700 ml-auto hover:bg-[#4A7056]/50 transition duration-500 dark:text-gray-300 dark:bg-[#4A7056]/40 cursor-pointer "
      onClick={() => setIsDark((isDark) => !isDark)}
    >
      {isDark ? "☀️ 淺色模式" : "🌙 深色模式"}
    </button>

    // <button
    //   onClick={() => setIsDark((d) => !d)}
    //   className="relative inline-flex items-center justify-center
    //              w-32 h-8 rounded-full
    //              border border-slate-400 dark:border-slate-200
    //              bg-slate-200 dark:bg-slate-800
    //              transition-colors duration-500 ease-out cursor-pointer"
    // >
    //   <span
    //     className={`absolute inset-y-1 left-1 w-6 h-6 rounded-full
    //             flex items-center justify-center
    //             bg-slate-800 dark:bg-neutral-200
    //             transition-transform duration-500 ease-out
    //             ${isDark ? "translate-x-24" : "translate-x-0"}`}
    //   >
    //     {isDark ? " ☀️" : "🌙"}
    //   </span>

    //   <span className="relative z-10 text-sm pointer-events-none">
    //     <span>{isDark ? " 淺色模式" : "深色模式"}</span>
    //   </span>
    // </button>
  );
}

export default DarkModeToggle;
