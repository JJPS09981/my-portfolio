import { useState } from "react";

export default function ShowLessDemo() {
  return (
    <div>
      <div>
        <TextExpander>
          太空旅行是終極冒險！想像一下在星辰之間翱翔、探索全新的世界。這些聽起來像夢想或科幻情節，但其實現在的太空旅行早已成為現實。人類與機器人正不斷踏入宇宙深處，揭開未知的秘密，並推進「可能性」的邊界。
        </TextExpander>
        <br />

        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </TextExpander>
        <br />

        <TextExpander
          collapsedNumWords={20}
          buttonColor="#ff6622"
          expanded={true}
        >
          太空旅行需要極為先進的科技，以及各國、私人企業與國際太空組織之間的合作。雖然過程並不容易（也不便宜），但成果真的超乎想像。想想人類第一次踏上月球，或火星上那些自由漫步的探測車，這些里程碑都來自於驚人的投入與努力。
        </TextExpander>
        <br />
      </div>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "顯示全文",
  collapseButtonText = "收起內容",
  buttonColor = "#228B22",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const isChinese = !children.includes(" ");

  const displayText = isChinese
    ? children.slice(0, collapsedNumWords) + "..."
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const display = isExpanded ? children : displayText;

  return (
    <div className={className}>
      <span>{display}</span>
      <button
        className="bg-transparent border-none text-inherit cursor-pointer"
        style={{ color: buttonColor }}
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
