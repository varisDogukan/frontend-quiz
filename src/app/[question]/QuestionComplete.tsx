import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useQuestionContext } from "@/context/question/QuestionProvider";
import CustomImage from "../shared/CustomImage";
import Title from "../shared/Title";
import Button from "../shared/Button";
import { getBackgroundColor } from "@/utils/colorFunctions";

function QuestionComplete() {
  const {
    state: { correctAnswer },
    resetState,
  } = useQuestionContext();

  const { question }: { question: string } = useParams();

  function handleSubmit() {
    resetState();
  }

  const style = {
    "--color": getBackgroundColor(question),
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className="flex flex-col gap-[40px] md:gap-[64px] xl:flex-row xl:gap-[143px]"
    >
      <Title>
        Quiz completed <span className="block font-medium">You scored...</span>
      </Title>

      <div className="flex-1">
        <div className="question-bg mb-3 flex flex-col items-center rounded-xl py-8 md:mb-8 md:rounded-3xl md:py-12">
          <CustomImage question={question} />

          <p className="my-4 text-[88px] font-medium md:mt-10 md:text-[144px]">
            {correctAnswer}
          </p>
          <p className="sm-text-color text-lg md:text-2xl">out of 10</p>
        </div>

        <Link href={"/"}>
          <Button handleSubmit={handleSubmit}>Play Again</Button>
        </Link>
      </div>
    </div>
  );
}

export default QuestionComplete;
