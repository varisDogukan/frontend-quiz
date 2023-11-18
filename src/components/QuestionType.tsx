import Image from "next/image";

type QuestionTypeProps = {
  title: string;
};

function QuestionType({ title }: QuestionTypeProps) {
  const color = "bg-question-" + title;

  return (
    <article className="shadow-theme question-bg flex h-16 cursor-pointer items-center gap-4 rounded-3xl p-3 md:h-20 md:gap-8 xl:h-24 xl:p-5">
      <div
        className={`grid h-10 w-10 place-content-center md:h-14 md:w-14 ${color}  rounded-md  md:rounded-xl xl:rounded-lg`}
      >
        <Image
          width={28}
          height={28}
          alt="icon"
          src="assets/images/icon-html.svg"
          className="md:w-10"
        />
      </div>
      <p className="text-color text-lg font-medium md:text-[28px]">Text</p>
    </article>
  );
}

export default QuestionType;
