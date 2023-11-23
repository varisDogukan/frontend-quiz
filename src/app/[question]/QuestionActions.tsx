import { useState } from "react";
import Image from "next/image";

import QuestionOption from "./QuestionOption";
import { useQuestionContext } from "@/context/question/QuestionProvider";
import Button from "../shared/Button";

type QuestionActionsProps = {
  options: string[];
  answer: string;
};

function QuestionActions({ options, answer }: QuestionActionsProps) {
  const {
    state: { isSubmit, selectedAnswer },
    submitAnswer,
    incrementCurrentAnswer,
    selectAnswer,
    incrementQuestionCount,
  } = useQuestionContext();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const [showError, setShowError] = useState(false);

  function handleSubmit() {
    if (isSubmit) {
      incrementQuestionCount();
      submitAnswer(false);
      setShowError(false);
      selectAnswer("");
    }

    if (!isSubmit && selectedAnswer) {
      submitAnswer(true);
      setShowError(false);

      if (selectedAnswer === answer) {
        incrementCurrentAnswer();
      }
    }

    if (!isSubmit && !selectedAnswer) {
      setShowError(true);
    }
  }

  return (
    <div className="flex-1">
      {options?.map((option, index) => (
        <QuestionOption
          key={crypto.randomUUID()}
          option={option}
          letter={alphabet[index]}
          answer={answer}
        />
      ))}

      <Button handleSubmit={handleSubmit}>
        {isSubmit ? "Next Question" : "Submit Answer"}
      </Button>

      {showError && (
        <div className="mt-3 flex select-none items-center justify-center gap-2 md:mt-8">
          <Image
            src="/assets/images/icon-error.svg"
            width={32}
            height={32}
            className="md:h-10 md:w-10"
            alt="error icon"
          />

          <p className="text-lg md:text-2xl">Please select an answer</p>
        </div>
      )}
    </div>
  );
}

export default QuestionActions;
