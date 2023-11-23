import { useQuestionContext } from "@/context/question/QuestionProvider";
import QuestionContent from "./QuestionContent";
import QuestionActions from "./QuestionActions";

function QuestionContainer() {
  const {
    state: { questions, questionCount },
  } = useQuestionContext();

  return (
    <div className="flex flex-col gap-10 md:gap-16 xl:flex-row xl:gap-[131px]">
      <QuestionContent
        indexOfNumber={questionCount || 0}
        numberOfQuestion={questions?.length || 10}
        question={questions[questionCount]?.question!}
      />

      <QuestionActions
        options={questions[questionCount]?.options!}
        answer={questions[questionCount]?.answer!}
      />
    </div>
  );
}

export default QuestionContainer;
