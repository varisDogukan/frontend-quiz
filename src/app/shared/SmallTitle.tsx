type SmallTitleProps = {
  text: string;
};

function SmallTitle({ text }: SmallTitleProps) {
  return (
    <p className="sm-text-color text-[14px] italic md:text-[24px]">{text}</p>
  );
}

export default SmallTitle;
