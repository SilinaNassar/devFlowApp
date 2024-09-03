"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  otherClasses?: string;
  placeholder: string;
  imgSrc: string;
}
const LocalSearchbar = ({
  imgSrc,
  route,
  iconPosition,
  otherClasses,
  placeholder,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="Search img"
          height={24}
          width={24}
          className="inline-block cursor-pointer"
        />
      )}
      <Input
        placeholder={placeholder}
        type="text"
        // value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
