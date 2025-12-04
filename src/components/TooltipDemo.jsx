function TooltipDemo() {
  return (
    <div className="flex justify-center py-6">
      <Tooltip label="提示文字示範">
        <button className="px-4 py-2 bg-[#4A7056] text-white rounded">
          Hover
        </button>
      </Tooltip>
    </div>
  );
}

function Tooltip({ children, label }) {
  return (
    <div className="relative inline-block group">
      {children}

      <div
        className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full
          whitespace-nowrap rounded-md px-2 py-1
          text-[10px] font-medium
          bg-slate-900 text-white
          shadow-md
          opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
          transition duration-150 z-50
        "
      >
        {label}
        <div
          className="
            absolute left-1/2 top-full -translate-x-1/2
            border-[5px] border-transparent border-t-slate-900
          "
        />
      </div>
    </div>
  );
}

export default TooltipDemo;
