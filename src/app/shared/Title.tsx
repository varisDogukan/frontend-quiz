import React from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className }: TitleProps) {
  return (
    <h4 className={`text-[40px] font-light md:text-[64px] ${className}`}>
      {children}
    </h4>
  );
}

export default Title;
