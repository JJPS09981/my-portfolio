import { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("content-scroll");
    if (!el) return;

    function onScroll() {
      setVisible(el.scrollTop > 100);
    }

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function handleScrollTop() {
    const el = document.getElementById("content-scroll");
    if (!el) return;

    el.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleScrollTop}
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 -ml-4
                  z-50 w-9 h-9 flex items-center justify-center
                  rounded-full border shadow-lg backdrop-blur 
                bg-white/70 border-slate-300 text-slate-700 
                hover:bg-white dark:bg-neutral-700/70 dark:border-neutral-600 
                dark:hover:bg-neutral-600 cursor-pointer transition-all duration-300
  ${
    visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4 pointer-events-none"
  }
`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#78A75A"
      >
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
      </svg>
    </button>
  );
}

export default BackToTop;
