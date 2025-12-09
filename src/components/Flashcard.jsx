import { useState } from "react";

export default function Flashcard() {
  const questions = [
    {
      id: 3457,
      question: "React 是基於哪一種語言？",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "React 應用程式的基本構成單位是什麼？",
      answer: "Components（元件）",
    },
    {
      id: 8832,
      question: "我們在 React 中用來描述 UI 的語法叫什麼？",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "要如何將資料從父元件傳遞給子元件？",
      answer: "Props",
    },
    {
      id: 9103,
      question: "要如何讓元件擁有記憶能力？",
      answer: "useState hook",
    },
    {
      id: 2002,
      question: "什麼是完全與 state 同步的輸入元素？",
      answer: "Controlled element（受控元件）",
    },
  ];

  return (
    <div className="App">
      <FlashCards questions={questions} />
    </div>
  );
}

function FlashCards({ questions }) {
  const [selected, setSelected] = useState(null);

  function handleClick(id) {
    setSelected(id !== selected ? id : null);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
      {questions.map((question) => (
        <div
          key={question.id}
          className={`border flex items-center justify-center text-center  rounded-md
           cursor-pointer p-5 aspect-3/2 min-h-28
            ${
              question.id === selected
                ? "border-[#3A5F48] bg-[#4A7056] text-white font-bold"
                : "border-neutral-400 dark:bg-[#2a2a2a] dark:text-neutral-200"
            }`}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selected ? question.answer : question.question}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
