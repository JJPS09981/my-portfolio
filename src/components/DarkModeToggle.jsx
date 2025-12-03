import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const darkMode = localStorage.getItem("dark");
      return darkMode === "true";
    } catch (err) {
      console.error("讀取深色模式localStorage有問題", err);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDark));

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="cursor-pointer "
      onClick={() => setIsDark((isDark) => !isDark)}
    >
      {isDark ? "☀️ 淺色模式" : "🌙 深色模式"}
    </button>
  );
}

export default DarkModeToggle;
