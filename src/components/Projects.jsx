function Projects() {
  const projects = [
    {
      title: "Forkify (純 JS DOM 練習)",
      description:
        "使用純 JavaScript 打造的食譜搜尋與收藏工具。透過 API 取得食譜資訊，並支援上傳自訂食譜、Local Storage 永久收藏與動態更新 UI。",
      tech: ["JavaScript", "Parcel", "Local Storage"],
      demo: "https://jjps09981.github.io/forkify-course-practice",
      github: "https://github.com/JJPS09981/forkify-course-practice/tree/main",
    },
    {
      title: "TravelList (React State 練習)",
      description:
        "旅遊打包清單工具，支援新增、編輯、刪除、排序、勾選、進度條。",
      tech: ["React", "CSS Grid", "Local Storage"],
      demo: "https://jjps09981.github.io/travel-list/",
      github: "https://github.com/JJPS09981/travel-list",
    },
    {
      title: "WorldWise (React Router 基礎練習，後續會加強)",
      description: "使用 React Router + Leaflet 打造的世界城市地圖筆記 App。",
      tech: ["React", "React Router", "Leaflet", "JSON Server"],
      demo: "https://worldwise-sheng.netlify.app/",
      github: "https://github.com/JJPS09981/worldwise",
    },
  ];

  return (
    <>
      <div className="space-y-4 w-full">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-2 rounded-lg border border-slate-200 p-4 hover:border-[#4A7056]/60 transition"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold">{project.title}</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-3 text-xs">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-slate-500 hover:text-[#4A7056]"
                >
                  Demo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-slate-500 hover:text-[#4A7056]"
                >
                  GitHub →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Projects;
