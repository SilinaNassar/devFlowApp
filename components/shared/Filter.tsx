import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@radix-ui/react-select";
import React from "react";
interface Props {
  filters: { name: string; value: string }[];
  otherClasses?: string;
  containerClasses: string;
}
const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a filter" />
          </div>
        </SelectTrigger>
        <SelectContent className="absolute left-0 z-10 mt-5 flex w-full rounded-md  bg-white shadow-lg dark:border-dark-400 dark:bg-dark-100">
          <SelectGroup className=" mt-3 flex min-w-40 flex-col gap-3 rounded border dark:border-slate-700">
            {filters.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className=" cursor-pointer items-center  rounded-md px-2 py-14 text-dark-500 transition-colors duration-150 focus:hover:bg-gray-100 dark:text-slate-300 focus:dark:hover:bg-dark-500"
              >
                <span className="ml-2 hidden text-gray-400 group-hover:inline-block">
                  &#9654;
                </span>
                <span className="flex-1">{item.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
