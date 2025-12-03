import AboutMe from "./AboutMe";
import Challenge from "./Challenge";
import Projects from "./Projects";
import { useState } from "react";

function InfoNav() {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return hash === "projects" ? 1 : 0;
  });

  function switchTab(tab) {
    window.location.hash = tab;
    setActiveSection(tab === "about" ? 0 : 1);
  }

  const baseBtn = "cursor-pointer rounded-md px-3 py-1.5 border ";
  const btnStyle = `bg-[#4A7056] text-white border-[#4A7056] 
  dark:bg-[#3A5F48] dark:text-[#EAF1EC] dark:border-[#4A7056]`;

  const btnHover = `hover:border-[#4A7056] hover:bg-white hover:text-[#4A7056]
  dark:hover:bg-neutral-800 dark:hover:text-white dark:hover:border-[#3A5F48]`;

  return (
    <section className="mt-4">
      <nav className="flex gap-3 mb-4">
        <button
          onClick={() => switchTab("about")}
          className={`${baseBtn} ${activeSection === 0 ? btnStyle : btnHover}`}
        >
          關於我
        </button>

        <button
          onClick={() => switchTab("projects")}
          className={`${baseBtn} ${activeSection === 1 ? btnStyle : btnHover}`}
        >
          作品
        </button>
      </nav>

      <div className="w-full  ">
        {activeSection === 0 && <AboutMe />}
        {activeSection === 1 && <Projects />}
      </div>
    </section>
  );
}

export default InfoNav;
