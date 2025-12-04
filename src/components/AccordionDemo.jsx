import { useState } from "react";

export default function AccordionDemo() {
  const faqs = [
    {
      title: "你們的椅子是在哪裡組裝的？",
      text: "我們的椅子主要在台灣本地組裝，部分零件由國外進口，再由工廠進行最後品質檢查與組裝，以確保穩定度與耐用性。",
    },
    {
      title: "椅子可以退換貨的期限是多久？",
      text: "商品到貨後享有 7 天鑑賞期（非試用期）。若商品未經使用且保持完整包裝，即可辦理退換貨。",
    },
    {
      title: "請問有提供海外寄送嗎？",
      text: "目前僅提供台灣本島配送，外島與海外地區暫不支援。如有特殊需求可聯繫客服協助評估。",
    },
  ];

  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  return (
    <div className="flex flex-col mx-auto gap-6">
      {faqs.map((el, index) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={index}
          key={el.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`
    px-6 py-5 pr-12 cursor-pointer
    grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-8 items-center
    rounded-lg transition-colors

    bg-white shadow-[0_0_30px_rgba(0,0,0,0.1)]
    dark:bg-neutral-800 dark:shadow-none

    ${
      isOpen
        ? "border-t-4 border-[#087f5b] dark:border-[#4ade80]"
        : "border-t-4 border-white dark:border-neutral-700"
    }
  `}
      onClick={handleToggle}
    >
      <p
        className={`text-xl font-medium 
          ${isOpen ? "text-[#087f5b]" : "text-[#4b5e72] "}`}
      >
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className={`text-xl font-medium ${isOpen ? "text-[#087f5b]" : ""}`}>
        {title}
      </p>
      <p className="text-lg font-medium">{isOpen ? `-` : `+`}</p>

      {isOpen && <div className="col-span-2 pb-4 leading-relaxed">{text}</div>}
    </div>
  );
}
