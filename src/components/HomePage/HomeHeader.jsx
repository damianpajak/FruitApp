import { useEffect, useState } from "react";

export const HomeHeader = () => {
  const [displayText, setDisplayText] = useState("");

  const text = "WELCOME TO FRUIT APP";
  const speed = 200;

  useEffect(() => {
    let currIdx = 0;
    let timeoutId;

    const typeText = () => {
      if (currIdx < text.length) {
        setDisplayText(text.slice(0, currIdx + 1));
        currIdx++;
        timeoutId = setTimeout(typeText, speed);
      }
    };

    setDisplayText("");
    typeText();

    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return (
    <div>
      <p className="home_header">{displayText}</p>
    </div>
  );
};
