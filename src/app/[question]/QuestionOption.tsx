import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useQuestionContext } from "@/context/question/QuestionProvider";
import { getQuestionColor } from "@/utils/colorFunctions";

type QuestionOptionProps = {
  option: string;
  letter: string;
  answer: string;
};

function QuestionOption({ option, letter, answer }: QuestionOptionProps) {
  const {
    state: { selectedAnswer, isSubmit },
    selectAnswer,
  } = useQuestionContext();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (!isSubmit && option === selectedAnswer) {
      setColor(getQuestionColor("selected"));
    }

    if (isSubmit && answer === selectedAnswer && selectedAnswer === option) {
      setColor(getQuestionColor("success"));
    }

    if (isSubmit && answer !== selectedAnswer && selectedAnswer === option) {
      setColor(getQuestionColor("error"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer]);

  const style = {
    "--color": color,
    "--bg-color": color || "#F4F6FA",
    "--text-color": color ? "#FFFFFF" : "#626C7F",
  } as React.CSSProperties;

  return (
    <button
      style={style}
      className="question-bg group mb-3 flex min-h-[64px] w-full cursor-pointer items-center gap-4 rounded-3xl  p-3 text-lg font-medium outline outline-2 outline-[var(--color)] transition-all hover:-translate-y-2 md:mb-6 md:h-20 md:gap-8 md:text-[28px] xl:h-24 xl:p-5"
      onClick={() => selectAnswer(option)}
      disabled={isSubmit}
    >
      <div className="grid h-10 w-10 shrink-0 place-content-center rounded-md bg-[var(--bg-color)] text-[var(--text-color)] group-hover:bg-purple-500 group-hover:text-purple-100 md:h-14  md:w-14 md:rounded-xl xl:rounded-lg">
        {letter.toUpperCase()}
      </div>
      <p className="text-left">{option}</p>
      {isSubmit && option === answer && (
        <Image
          className="ml-auto"
          width={30}
          height={30}
          src="/assets/images/icon-correct.svg"
          alt="icon"
        />
      )}

      {isSubmit && answer !== selectedAnswer && selectedAnswer === option && (
        <Image
          className="ml-auto"
          width={30}
          height={30}
          src="/assets/images/icon-error.svg"
          alt="icon"
        />
      )}
    </button>
  );
}

export default QuestionOption;
