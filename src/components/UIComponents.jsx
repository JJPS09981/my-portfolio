import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import AccordionDemo from "./AccordionDemo";
import TooltipDemo from "./TooltipDemo";
import StarRatingDemo from "./StarRatingDemo";
import ShowLessDemo from "./ShowLessDemo";
import ToastDemo from "./ToastDemo";

const uiComponents = [
  {
    id: "accordion",
    name: "Accordion 手風琴 ",
    description: "展開 / 收合型的內容區塊，常見於 FAQ。",
    Demo: AccordionDemo,
  },
  {
    id: "flashcard",
    name: "Flashcard 翻卡片",
    description:
      "點擊卡片切換問題與答案的簡易問答小組件，適合用於 Q&A 或學習用途。",
    Demo: Flashcard,
  },
  {
    id: "tooltip",
    name: "Tooltip 提示框",
    description: "滑鼠或鍵盤焦點移入時顯示一段提示文字的小工具。",
    Demo: TooltipDemo,
  },
  {
    id: "star-rating",
    name: "Star Rating 評分",
    description: "可點擊的星星評分元件，支援動態高亮與互動效果。",
    Demo: StarRatingDemo,
  },
  {
    id: "text-expander",
    name: "Text Expander 文字折疊",
    description:
      "可自動縮短長文並提供顯示 / 隱藏切換按鈕的元件，常用於文章預覽或 FAQ 區塊。",
    Demo: ShowLessDemo,
  },
  {
    id: "toast",
    name: "Toast 通知",
    description:
      "使用 React-Toastify 建立的提示訊息元件，支援成功與錯誤等狀態。",
    Demo: ToastDemo,
  },
];

function UIComponents() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
      <section id="components" className="mt-4 space-y-3">
        <p className="text-xs text-slate-600 leading-relaxed dark:text-neutral-300">
          點選下方元件名稱，會開啟範例 Demo 彈窗。
        </p>

        <div className="flex flex-wrap gap-2">
          {uiComponents.map((component) => (
            <button
              key={component.id}
              className="text-sm underline cursor-pointer text-neutral-800 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors"
              onClick={() => setActiveComponent(component)}
            >
              {component.name}
            </button>
          ))}
        </div>
      </section>
      <ComponentModal
        component={activeComponent}
        onClose={() => setActiveComponent(null)}
      />
    </>
  );
}

function ComponentModal({ component, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!component) return null;

  const { name, description, Demo } = component;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl bg-white p-4 shadow-xl dark:bg-neutral-900 border border-neutral-500"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between mb-2">
          <h4 className="text-xl font-semibold">{name}</h4>
          <button
            onClick={onClose}
            className="text-2xl text-slate-500 hover:text-neutral-200 cursor-pointer"
          >
            &times;
          </button>
        </header>

        <p className="mb-3 text-xs text-slate-600 dark:text-neutral-300">
          {description}
        </p>

        <div className="rounded-md border border-dashed border-slate-200 p-3 dark:border-neutral-700">
          <Demo />
        </div>
      </div>
    </div>
  );
}

export default UIComponents;
