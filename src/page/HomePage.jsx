import InfoSection from "./InfoSection";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="h-screen overflow-hidden text-slate-900">
      <div className="mx-auto bg-white max-w-3xl px-4 py-12 space-y-16 dark:text-slate-100 h-full overflow-y-auto">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
            <span>🦖</span>
            <span>Front-End Developer</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              Eason Chen / 陳億昇
            </h1>
            <div className="h-0.5 w-16 bg-[#4A7056]" />
            <p className="text-sm text-slate-600 leading-relaxed">
              專注於 React 與前端體驗的工程師。
              目前持續透過實戰專案累積作品，目標成為能獨立完成產品的前端工程師。
            </p>
          </div>
        </header>

        <InfoSection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
