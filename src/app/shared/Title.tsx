type TitleProps = {
  text: string;
  boldText: string;
  className?: string;
};

function Title({ text, boldText, className }: TitleProps) {
  return (
    <h4 className={`text-[40px] font-light md:text-[64px] ${className}`}>
      {text} <span className="block font-medium">{boldText}</span>
    </h4>
  );
}

export default Title;
