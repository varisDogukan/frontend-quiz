"use client";

import React from "react";
import Link from "next/link";

import CustomImage from "../app/shared/CustomImage";
import { getBackgroundColor } from "@/utils/colorFunctions";

type QuestionTypeProps = {
  title: string;
};

function QuestionType({ title }: QuestionTypeProps) {
  const style = {
    "--color": getBackgroundColor(title?.toLowerCase()),
  } as React.CSSProperties;

  return (
    <Link
      style={style}
      href={`/${title?.toLowerCase()}`}
      className="question-bg block h-16 cursor-pointer  rounded-3xl p-3 outline-2 outline-[var(--color)] transition-all hover:-translate-y-2 hover:outline  md:h-20 xl:h-24 xl:p-5"
    >
      <CustomImage question={title?.toLowerCase()} />
    </Link>
  );
}

export default QuestionType;
