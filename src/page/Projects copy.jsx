function Projects() {
  const projects = [
    {
      title: "WorldWise (做基礎Router練習，後續會慢慢加強)",
      description: "使用 React Router + Leaflet 打造的世界城市地圖筆記 App。",
      tech: ["React", "React Router", "Leaflet"],
      demo: "#",
      github: "#",
    },
    {
      title: "Forkify",
      description: "食譜搜尋與收藏應用，支援 API 搜尋與自訂食譜。",
      tech: ["JavaScript", "Parcel"],
      demo: "#",
      github: "#",
    },
    {
      title: "BookList",
      description: "可以新增、編輯、刪除書籍的 CRUD 練習專案。",
      tech: ["React", "JSON Server", "Axios"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <>
      <div className="space-y-4">
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
                  className="text-slate-500 hover:text-[#4A7056]"
                >
                  Demo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
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
