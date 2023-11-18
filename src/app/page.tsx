import SmallTitle from "@/app/shared/SmallTitle";
import Title from "@/app/shared/Title";
import QuestionType from "@/components/QuestionType";

export default function Home() {
  return (
    <section className="container">
      <div>
        <Title
          text="Welcome to the"
          boldText="Frontend Quiz!"
          className="mb-[16px] xl:mb-[48px]"
        />
        <SmallTitle text="Pick a subject to get started." />
      </div>

      <div>
        <QuestionType title="CSS" />
      </div>
    </section>
  );
}
