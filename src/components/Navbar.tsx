"use client";

import React from "react";
import { useParams } from "next/navigation";

import Theme from "./Theme";
import CustomImage from "../app/shared/CustomImage";
import { getBackgroundColor } from "@/utils/colorFunctions";

function Navbar() {
  const { question }: { question: string } = useParams();

  const style = {
    "--color": getBackgroundColor(question),
  } as React.CSSProperties;

  return (
    <nav
      style={style}
      className="container flex items-center justify-between py-[16px] md:py-[40px] xl:py-[80px]"
    >
      {question && <CustomImage question={question} />}
      <Theme />
    </nav>
  );
}

export default Navbar;
