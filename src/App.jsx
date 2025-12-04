import HomePage from "./page/HomePage";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const darkMode = localStorage.getItem("darkMode");
      return darkMode === "true";
    } catch (err) {
      console.error("讀取深色模式localStorage有問題", err);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <HomePage isDark={isDark} setIsDark={setIsDark} />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}

export default App;
