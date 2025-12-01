import AboutMe from "./AboutMe";
import Challenge from "./Challenge";
import Projects from "./Projects";
import { useState } from "react";

function InfoNav() {
  const [activeSection, setActiveSection] = useState(0);

  const baseBtn = "cursor-pointer rounded-md px-3 py-1.5 border transition";
  const btnStyle = "bg-[#4A7056] text-white border-[#4A7056]";
  const btnHover =
    "border-slate-300 hover:border-[#4A7056] hover:text-[#4A7056]";

  return (
    <section className="mt-4">
      <nav className="flex gap-3 mb-4">
        <button
          onClick={() => setActiveSection(0)}
          className={`${baseBtn} ${activeSection === 0 ? btnStyle : btnHover}`}
        >
          關於我
        </button>

        <button
          onClick={() => setActiveSection(1)}
          className={`${baseBtn} ${activeSection === 1 ? btnStyle : btnHover}`}
        >
          作品
        </button>
        <button
          onClick={() => setActiveSection(2)}
          className={`${baseBtn} ${activeSection === 2 ? btnStyle : btnHover}`}
        >
          小功能
        </button>
      </nav>

      <div className="w-full  ">
        {activeSection === 0 && <AboutMe />}
        {activeSection === 1 && <Projects />}
        {activeSection === 2 && <Challenge />}
      </div>
    </section>
  );
}

export default InfoNav;
