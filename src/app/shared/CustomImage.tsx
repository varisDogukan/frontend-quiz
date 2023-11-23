import React from "react";
import Image from "next/image";

type CustomImageProps = {
  question: string;
};

function CustomImage({ question }: CustomImageProps) {
  function getIcon(value: string) {
    return `/assets/images/icon-${question}.svg`;
  }

  return (
    <div className="flex shrink-0 items-center gap-4 md:gap-8">
      <div className="grid h-10 w-10 place-content-center rounded-md bg-[var(--color)] md:h-14 md:w-14 md:rounded-xl xl:rounded-lg">
        <Image
          width={28}
          height={28}
          alt="icon"
          src={getIcon(question)}
          className="md:w-10"
        />
      </div>

      <p className="text-color text-lg font-medium capitalize md:text-[28px]">
        {question}
      </p>
    </div>
  );
}

export default CustomImage;
