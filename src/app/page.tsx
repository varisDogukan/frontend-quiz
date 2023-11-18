"use client";

import SmallTitle from "@/app/shared/SmallTitle";
import Title from "@/app/shared/Title";
import QuestionType from "@/components/QuestionType";
import { useQuestionContext } from "@/context/question/QuestionProvider";
import { useEffect } from "react";

export default function Home() {
  const {
    state: { questionTypes },
    getQuestionType,
  } = useQuestionContext();

  useEffect(() => {
    getQuestionType();
  }, []);

  return (
    <section className="container flex flex-col gap-10 md:gap-16 xl:flex-row xl:gap-36">
      <div className="flex-1">
        <Title
          text="Welcome to the"
          boldText="Frontend Quiz!"
          className="mb-[16px] xl:mb-[48px]"
        />
        <SmallTitle text="Pick a subject to get started." />
      </div>

      <div className="flex flex-1 flex-col gap-3 md:gap-6">
        {questionTypes.length > 0 &&
          questionTypes.map((question) => (
            <QuestionType key={question.id} {...question} />
          ))}
      </div>
    </section>
  );
}
