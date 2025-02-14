import { questions } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "../RenderTag";

const popularTags = [
  { _id: "1", name: "javascript", totalQuestions: 5 },
  { _id: "2", name: "react", totalQuestions: 6 },
  { _id: "3", name: "next", totalQuestions: 7 },
  { _id: "4", name: "vue", totalQuestions: 8 },
  { _id: "5", name: "nodejs", totalQuestions: 19 },
  { _id: "6", name: "java", totalQuestions: 3 },
];

const RightSiderbar = () => {
  return (
    <aside className="background-light900_dark200 light-border custom-scrollbar no-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((item) => {
            return (
              <Link
                key={item._id}
                href={`/questions/${item._id}`}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{item.text}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular ags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSiderbar;
