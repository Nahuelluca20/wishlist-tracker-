"use client";
import {HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";

export default function HeartsCount({
  hearts,
  size = "4",
  handleClick,
}: {
  hearts: number;
  size?: string;
  handleClick?: (index: number) => void;
}) {
  return (
    <div className="flex space-x-1">
      {Array.from({length: 5}, (_, index) => (
        <HeartIconSolid
          key={index}
          className={` ${handleClick && "cursor-pointer"} w-${size} h-${size} ${
            index < hearts ? "text-white" : "text-nextGray-400"
          }`}
          onClick={() => handleClick && handleClick(index)}
        />
      ))}
    </div>
  );
}
