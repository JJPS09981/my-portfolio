const skills = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "Typescript",
  "React",
  "Tailwind CSS",
  "SASS / SCSS",
  "Git",
  "npm / npx",
];

const learningSkills = [
  "Next.js",
  "React Query",
  "Zustand 或 Redux Toolkit",
  "Node + Express",
  "MongoDB",
];

const skillStyle = "px-2.5 py-1 text-xs rounded-full border ";

function IntroduceSection({ title, children }) {
  return (
    <section className="pt-4 border-t border-slate-200 space-y-2 ">
      <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2 dark:text-neutral-200">
        {title}
      </h3>
      {children}
    </section>
  );
}

function AboutMe() {
  return (
    <div className="">
      <section className="p-6 border border-slate-200 rounded-xl shadow-sm space-y-6 ">
        <header className="flex items-baseline gap-2">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-neutral-200">
            關於我
          </h2>
          <span className="text-sm text-slate-400">About Me</span>
        </header>

        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="shrink-0 flex justify-center md:justify-start">
            <div className="w-28 h-28 rounded-full dark:border dark:border-white/50 flex items-center justify-center overflow-hidden">
              <span className="text-3xl" aria-hidden="true">
                <img src="avatar.jpg" alt="avatar" />
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-lg px-4 py-3 space-y-1">
              <p className="text-sm text-slate-500">👋 嗨，我是</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-neutral-300">
                陳億昇（Sheng）
              </p>

              <ul className="mt-2 text-sm text-slate-700 space-y-1 dark:text-neutral-300">
                <li>· React、Tailwind、Vite 等前端技術</li>
                <li>· 努力打造乾淨、易讀又有互動感的 UI</li>
              </ul>
            </div>
          </div>
        </div>

        <IntroduceSection title={"📌 自我介紹"}>
          {
            <article className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-neutral-200">
              <section>
                <p>
                  我是一名前<strong> 設備工程師轉職的前端開發者 </strong>
                  ，擅長使用<strong> React + Vite </strong>
                  打造快速、乾淨、好維護的網頁介面。 在開發過程中，我很重視
                  <em>UI/UX 細節、狀態管理邏輯、元件化設計、前端工程化流程</em>
                  ，喜歡試著將複雜功能拆解成清楚、可重複使用的程式結構。
                </p>
              </section>

              <section>
                <h3 className="font-semibold mb-2">🔧 目前專注的技術</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>⚛️ React 生態系（Hooks、組件化、Props/State、Router）</li>
                  <li>🎨 Tailwind CSS / RWD 響應式設計</li>
                  <li>🔌 API 串接、非同步流程、錯誤處理</li>
                  <li>
                    🛠️ 前端工程化（Vite、Parcel、ESLint、npm（套件管理、npm
                    scripts））
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">🧩 工程背景帶來的優勢</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>系統化拆解問題的能力</li>
                  <li>跨部門溝通與危機處理</li>
                  <li>對流程品質的堅持與紀律</li>
                  <li>與客戶維持良好的溝通</li>
                </ul>
                <p className="mt-2">
                  這些能力讓我在前端開發時，更能以<strong>工程思維</strong>
                  規劃架構、分析需求與優化細節。
                </p>
              </section>
            </article>
          }
        </IntroduceSection>

        <IntroduceSection title={"🌟 技能 Skills"}>
          {
            <div className="flex flex-wrap gap-2 ">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`${skillStyle} bg-[#4A7056]/30  border-[#4A7056] dark:text-[#EAF1EC] dark:bg-[#4A7056]/60`}
                >
                  {skill}
                </span>
              ))}
            </div>
          }
        </IntroduceSection>

        <IntroduceSection title={"📖 學習中技能 Learning"}>
          {
            <div className="flex flex-wrap gap-2">
              {learningSkills.map((skill) => (
                <span
                  key={skill}
                  className={`${skillStyle} bg-neutral-500/50  border-neutral-600 dark:text-neutral-300 dark:border-neutral-200`}
                >
                  {skill}
                </span>
              ))}
            </div>
          }
        </IntroduceSection>

        <IntroduceSection title={"🚀 我的特色 Highlights"}>
          {
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 dark:text-neutral-200">
              <li>熱愛學習，每天固定投入時間練習與寫程式 🧠</li>
              <li>學習並完成多個練習專案（例如 Forkify、WorldWise 等）</li>
              <li>會去看查官方文件、試著 Debug 與拆解問題</li>
              <li>會自己規劃學習路線與進度，持續整理筆記與作品</li>
            </ul>
          }
        </IntroduceSection>

        <IntroduceSection title={"🎽 生活 / 興趣"}>
          {
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 dark:text-neutral-200">
              <li>
                持續進行長跑訓練，目前正準備半馬，規律訓練讓我保持節奏與專注
              </li>
              <li>
                喜歡聽團、露營與戶外運動，室內活動喜歡看電影或是玩線上遊戲
              </li>
            </ul>
          }
        </IntroduceSection>
      </section>
    </div>
  );
}

export default AboutMe;
