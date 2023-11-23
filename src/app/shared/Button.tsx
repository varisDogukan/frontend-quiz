import React from "react";

type ButtonPropsType = {
  handleSubmit: () => void;
  children: React.ReactNode;
};

function Button({ handleSubmit, children }: ButtonPropsType) {
  return (
    <button
      className="grid h-14 w-full place-content-center rounded-xl bg-purple-100 text-lg font-medium text-white shadow-dark transition-all hover:bg-purple-500 md:mt-2 md:h-[92px] md:rounded-3xl md:text-[28px]"
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
