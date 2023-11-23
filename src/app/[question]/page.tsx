"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useQuestionContext } from "@/context/question/QuestionProvider";
import QuestionContainer from "./QuestionContainer";
import QuestionComplete from "./QuestionComplete";

function Question() {
  const {
    state: { questionCount, questions },
    getQuestions,
  } = useQuestionContext();
  const params = useParams();

  useEffect(() => {
    getQuestions(params.question as string);
  }, []);

  return (
    <section className="container">
      {questionCount !== questions.length && <QuestionContainer />}
      {questionCount === questions.length && <QuestionComplete />}
    </section>
  );
}

export default Question;
