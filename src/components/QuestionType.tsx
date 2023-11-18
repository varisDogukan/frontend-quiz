"use client";

import Image from "next/image";
import { getBackgroundColor } from "@/utils/colorFunctions";

type QuestionTypeProps = {
  title: string;
  icon: string;
};

function QuestionType({ title, icon }: QuestionTypeProps) {
  return (
    <article className="question-bg flex h-16 cursor-pointer items-center gap-4 rounded-3xl p-3 outline-2 transition-all hover:-translate-y-2 hover:outline md:h-20 md:gap-8 xl:h-24 xl:p-5">
      <div
        className={`${getBackgroundColor(
          title
        )} grid h-10 w-10 place-content-center rounded-md md:h-14 md:w-14 md:rounded-xl xl:rounded-lg`}
      >
        <Image
          width={28}
          height={28}
          alt="icon"
          src={icon}
          className="md:w-10"
        />
      </div>
      <p className="text-color text-lg font-medium md:text-[28px]">{title}</p>
    </article>
  );
}

export default QuestionType;
