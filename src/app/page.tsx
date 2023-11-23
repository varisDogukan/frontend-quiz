"use client";

import { useEffect } from "react";

import { useQuestionContext } from "@/context/question/QuestionProvider";
import SmallTitle from "@/app/shared/SmallTitle";
import Title from "@/app/shared/Title";
import QuestionType from "@/components/QuestionType";

export default function Home() {
  const {
    state: { questionTypes },
    getQuestionType,
    resetState,
  } = useQuestionContext();

  useEffect(() => {
    resetState();
    getQuestionType();
  }, []);

  return (
    <main className="container flex flex-col gap-10 md:gap-16 xl:flex-row xl:gap-36">
      <div className="flex-1">
        <Title className="mb-[16px] xl:mb-[48px]">
          Welcome to the{" "}
          <span className="block font-medium">Frontend Quiz!</span>
        </Title>
        <SmallTitle text="Pick a subject to get started." />
      </div>

      <section className="flex flex-1 flex-col gap-3 md:gap-6">
        {questionTypes.length > 0 &&
          questionTypes.map((question) => (
            <QuestionType key={question.id} {...question} />
          ))}
      </section>
    </main>
  );
}
