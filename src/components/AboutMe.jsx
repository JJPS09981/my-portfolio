const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SASS / SCSS",
  "Tailwind CSS",
  "Git",
];
const enhanceSkills = ["Typescript", "Next.js", "Node + Express"];

const skillStyle = "px-2.5 py-1 text-xs rounded-full border ";

function IntroduceSection({ title, children }) {
  return (
    <section className="pt-4 border-t border-slate-200 space-y-2 ">
      <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2 dark:text-neutral-200">
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

        <IntroduceSection title={"🌟 技能 Skills"}>
          {
            <div className="flex flex-wrap gap-2 ">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`${skillStyle} bg-[#4A7056]/20 dark:text-[#EAF1EC] border-[#4A7056]/40`}
                >
                  {skill}
                </span>
              ))}
            </div>
          }
        </IntroduceSection>

        <IntroduceSection title={"📖 待補技能 Skills"}>
          {
            <div className="flex flex-wrap gap-2">
              {enhanceSkills.map((skill) => (
                <span
                  key={skill}
                  className={`${skillStyle} bg-neutral-700/50 dark:text-neutral-300 border-neutral-600`}
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

        <IntroduceSection title={"📌 自我介紹"}>
          {
            <p className="text-sm leading-relaxed text-slate-700 dark:text-neutral-200">
              在疫情期間擔任三年的設備工程師，但大學專題接觸到的網頁開發經驗，讓我對前端產生長期興趣。轉職後，我系統性修習
              Jonas Schmedtmann 的前端與 React
              全系列課程，透過課程中的專案與實戰練習，建立了扎實的 JavaScript 與
              React 基礎。 現在主要專注於 React
              與前端工程化，持續以實作累積作品，並希望未來能以前端工程師的角色參與完整的產品開發流程。
            </p>
          }
        </IntroduceSection>

        <IntroduceSection title={"🎽 生活 / 興趣"}>
          {
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 dark:text-neutral-200">
              <li>長跑訓練中，目前正準備半馬比賽</li>
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
