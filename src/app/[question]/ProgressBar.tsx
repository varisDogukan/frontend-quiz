import React from "react";

function ProgressBar({ value }: { value: number }) {
  const calculatedWidth = value * 10 + "%";

  const style = {
    "--width": calculatedWidth,
  } as React.CSSProperties;

  return (
    <div style={style} className="question-bg h-4 w-full rounded-full p-1">
      <div
        className={`h-full w-[var(--width)] rounded-full bg-purple-100 transition-all`}
      />
    </div>
  );
}

export default ProgressBar;
