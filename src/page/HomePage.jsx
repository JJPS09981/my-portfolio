import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";

function HomePage({ isDark, setIsDark }) {
  return (
    <AppLayout>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <InfoSection />
      <Footer />
    </AppLayout>
  );
}

function AppLayout({ children }) {
  return (
    <div className="h-screen overflow-hidden text-slate-900">
      <div
        className="mx-auto bg-white max-w-3xl px-4 py-12 space-y-16 dark:text-slate-100 dark:bg-neutral-800 h-full overflow-y-auto"
        style={{ scrollbarGutter: "stable" }}
      >
        {children}
      </div>
    </div>
  );
}

function Header({ isDark, setIsDark }) {
  return (
    <>
      <header className="space-y-4">
        <div className="flex justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4A7056]/40 px-3 py-1 bg-[#4A7056]/10 text-[#4A7056] text-xs ">
            <span>🦖</span>
            <span className="dark:text-neutral-100">Front-End Developer</span>
          </div>
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight dark:text-neutral-100">
            Eason Chen / 陳億昇
          </h1>
          <div className="h-0.5 w-16 bg-[#4A7056] " />
          <p className="text-sm text-slate-600 leading-relaxed dark:text-neutral-100">
            持續透過 Jonas Schmedtmann
            的課程系統化學習前端技術，並以專案實作打造自己的作品集。專注在 React
            與前端體驗，目標成為能獨立完成產品的前端工程師。
          </p>
        </div>
      </header>
    </>
  );
}

export default HomePage;
