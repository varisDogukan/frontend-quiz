import SmallTitle from "../shared/SmallTitle";
import ProgressBar from "./ProgressBar";

type QuestionContentProps = {
  question: string;
  numberOfQuestion: number;
  indexOfNumber: number;
};

function QuestionContent({
  question,
  numberOfQuestion,
  indexOfNumber,
}: QuestionContentProps) {
  return (
    <section className="flex-1">
      <SmallTitle
        text={`Question ${indexOfNumber + 1} of ${numberOfQuestion}`}
      />

      <p className="mb-6 mt-3 text-xl font-medium md:mb-10 md:mt-7 md:text-4xl xl:mb-[168px]">
        {question}
      </p>

      <ProgressBar value={indexOfNumber + 1} />
    </section>
  );
}

export default QuestionContent;
